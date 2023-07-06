import { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <div>
                <AppointmentBanner
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                ></AppointmentBanner>
                <AvailableAppointments
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                ></AvailableAppointments>
            </div>
        </div>
    );
};

export default Appointment;