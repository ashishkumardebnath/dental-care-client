import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { format } from "date-fns";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext)
    const { name, slots, price } = treatment;

    const date = format(selectedDate, 'PP')

    const handleBookingModal = (event) => {
        event.preventDefault()
        const form = event.target;
        const patentName = form.patentName.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patentName,
            slot,
            email,
            phone,
            price
        }
        console.log(booking)
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }

            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBookingModal} className="grid grid-cols-1 gap-3 mt-10">
                        <input name="date" type="text" value={date} disabled className="input input-bordered w-full " />
                        <select name="slot" className="select select-bordered w-full ">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                > {slot}</option>)
                            }
                        </select>
                        <input name="patentName" type="text" defaultValue={user.displayName} disabled placeholder="Your Name" className="input input-bordered w-full " required />
                        <input name="email" type="email" defaultValue={user.email} disabled placeholder="Enter Your Email" className="input input-bordered w-full " required />
                        <input name="phone" type="text" placeholder="Enter Your Phone Number" className="input input-bordered w-full " />
                        <input className=" btn btn-neutral w-full " type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;