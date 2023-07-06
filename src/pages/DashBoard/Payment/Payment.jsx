import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutFrom from "./CheckoutFrom";
import Loading from "../../Shared/Loading/Loading";


const stripePromise = loadStripe(import.meta.env.VITE_FIREBASE_REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData()
    const navigation = useNavigation()
    const { treatment, price, appointmentDate, slot } = booking;
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className="w-96 py-10">
                <Elements stripe={stripePromise}>
                    <CheckoutFrom
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;