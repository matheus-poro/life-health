import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

import "../components/Appointment/style.css";
import Appointment from "../components/Appointment/Appointment";

interface Appointment {
  id: number;
  doctorName: string;
  date: string;
  time: string;
  photo: string;
  additionalInfo: string;
}

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [expandedAppointment, setExpandedAppointment] = useState<number | null>(null);

  useEffect(() => {
    // Simulando chamada à API com um atraso de 1 segundo
    setTimeout(() => {
      const fetchedAppointments: Appointment[] = [
        {
          id: 1,
          doctorName: "Dr. John Doe",
          date: "11/06",
          time: "00:10h",
          photo: "https://example.com/doctor1.jpg",
          additionalInfo: "Additional information about the appointment.",
        },
        {
          id: 2,
          doctorName: "Dr. Jane Smith",
          date: "12/06",
          time: "09:30h",
          photo: "https://example.com/doctor2.jpg",
          additionalInfo: "Additional information about the appointment.",
        },
      ];
      setAppointments(fetchedAppointments);
    }, 1000);
  }, []);

  const expandAppointment = async (appointmentId: number) => {
    // Simulando chamada à API para obter informações adicionais sobre o agendamento
    const response = await axios.get(`https://api.example.com/appointments/${appointmentId}`);
    const { additionalInfo } = response.data;

    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === appointmentId) {
        return { ...appointment, additionalInfo };
      }
      return appointment;
    });

    setAppointments(updatedAppointments);
    setExpandedAppointment(appointmentId);
  };

  const collapseAppointment = () => {
    setExpandedAppointment(null);
  };

  return (
    <div className="Dashboard">
      <div className="side-menu">
       <Sidebar />
      </div>
      <div className="container">
       <Appointment /> 
      </div>
    </div>
  );
};

export default Dashboard;
