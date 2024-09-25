import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment/Payment";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Api_Key)


const makePayment = () => {
    return (
        <div>
           <div>
    <h2 className="text-3xl">Please pay</h2>
</div>

<Elements stripe={stripePromise}>
    <Payment></Payment>

</Elements> 
        </div>
    );
};

export default makePayment;