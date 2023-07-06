import { useState } from "react";
import AvailableAppointmentOption from "./AvailableAppointmentOption";
import { format } from "date-fns";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointments = ({ selectedDate, }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data
        }
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section>
            <p className="text-center text-secondary font-semibold">Available Services on {format(selectedDate, 'PP')}</p>
            <p className="text-center text-gray-500">Please select a service.</p>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    appointmentOptions.map(appointmentOption => <AvailableAppointmentOption
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AvailableAppointmentOption>)
                }
                {treatment &&
                    <BookingModal
                        treatment={treatment}
                        setTreatment={setTreatment}
                        selectedDate={selectedDate}
                        refetch={refetch}
                    ></BookingModal>
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;