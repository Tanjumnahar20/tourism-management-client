/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../CustomHooks/useAxios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../CustomHooks/useAuth";
import Swal from "sweetalert2";
import PropTypes from 'prop-types'; // Import PropTypes

const CheckOut = ({ cart }) => {
  // Define prop types
CheckOut.propTypes = {
  cart: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    numberOfTickets: PropTypes.string.isRequired,
    destination: PropTypes.string.destination,
    displayName: PropTypes.string.displayName,
  }).isRequired,
};

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState();

  useEffect(() => {
    if (cart?.totalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: cart.totalPrice })
        .then(res => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch(err => {
          console.error("Error creating payment intent:", err);
        });
    }
  }, [cart?.totalPrice, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      console.log("client secret not ready", clientSecret);
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      console.log('error in payment ', error);
      setError(error.message);
    } else {
      console.log('payment method creating', paymentMethod);
      setError('');
    }

    // Payment confirm
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'not signed in',
          name: user?.displayName || 'anonymous'
        }
      }
    });
    if (confirmError) {
      console.log('error in payment intent', confirmError);
    } else {
      console.log('payment intent', paymentIntent);

      if (paymentIntent.status === 'succeeded') {
        // console.log("paymentIntent = ", paymentIntent);
        setTransactionId(paymentIntent.id);

        // Save payment info to the database
        const payment = {
          email: user?.email,
          price: cart?.totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartId: cart?._id,
          status: 'Paid'
        };

        const res = await axiosSecure.post('/payment', payment);
        const dataId = res?.data?.paymentResult?.insertedId;

        if (dataId) {
          Swal.fire({
            position: "top",
            icon: "success",
            Destination: `${cart?.destination} Trip Book for`,
            Username: `${cart?.displayName}`,
            TotalAmount: `${cart?.totalPrice} Paid successfully!`,
            showConfirmButton: false,
            timer: 3500
          });

          navigate('/bookings');
        }
      }
    }
  };

  return (
    <div className="mx-6 my-6">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary my-6" type="submit" disabled={!clientSecret}>
          Make Payment
        </button>
        <p className="text-2xl text-red-700 ">{error}</p>
        {transactionId && <p className="text-green-600">your transaction id is: {transactionId}</p>}
      </form>
    </div>
  );
};

export default CheckOut;
