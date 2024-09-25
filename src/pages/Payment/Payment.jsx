
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Api_Key)

const Payment = () => {


    return (
        <div>
                    <div>
    <h2 className="text-3xl">Please pay</h2>
</div>

<Elements stripe={stripePromise}>
   <CheckOut></CheckOut>

</Elements> 
        </div> 
    );
};

export default Payment;