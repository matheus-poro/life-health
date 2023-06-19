import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { initFirebase } from '../services/firebase';
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./style.css";

import "../components/Appointment/style.css";
import Appointment from "../components/Appointment/Appointment";
import PhysicalActivityChart from "../components/PhysicalActivityChart/PhysicalActivityChart";

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
  const [userType, setUserType] = useState<string>('user');
  const [userData, setUserData] = useState<any>('');
  // console.log("userData", userData.fullname);

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

  const app = initFirebase();
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Pega dados do usuario logado
  const user = auth.currentUser;
  const searchEmail = user?.email;

  const getCollectionData = async () => {
    const querySnapshot = await getDocs(collection(db, userType));
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data;
  };

  setTimeout(() => {
    getCollectionData().then((data) => {
      // console.log(data[0]);

      if (data[0]) {
        if (searchEmail === data[0].email) {
          setUserData(data[0]);
        } else {
          setUserType('doctor');
        }
      } else {
        setUserType('doctor');
      }
    });
  }, 1000);

  // console.log(userData);

  return (
    <div className="Dashboard">
      <div className="side-menu">
        <Sidebar />
      </div>
      <div className="container">
        <div>
          <Stack className="boxAvatar" direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="https://www.essence.com/wp-content/uploads/2016/05/1463680384/Scervino%20bbt%20S14%20002.jpg?width=600"
              sx={{ width: 150, height: 150, marginTop: "20px", border: "3px solid #4894ff" }}
            />
          </Stack>
          {userData ?
            (userData?.type === 'doctor') ? (
              <p className="nameDashboard">
                Olá, {(userData?.maleBiologicalGender) ? `Dr.${userData?.fullname}` : `Dra.${userData?.fullname}`}
              </p>
            ) : (
              <p className="nameDashboard">Olá, {userData?.fullname}</p>
            )
            : undefined}
          <div className="boxConteiner">
            <Box
              className="boxContent"
            >
              <AssignmentIcon
                style={{
                  color: "#4894ff",
                  float: "right",
                }}
              />
              <h6 className="titleDashboard">Preenchimento do perfil</h6>
              <p>Preencha seu perfil, para obter uma visão melhor do seu atual estado de saúde.</p>
              <br />
              <LinearProgress
                sx={{
                  height: 10,
                  borderRadius: 5
                }}
                variant="determinate"
                value={40}
              />
            </Box>
            <Box
              className="boxContent"
            >
              <TodayOutlinedIcon
                style={{
                  color: "#4894ff",
                  float: "right",
                }}
              />
              <h6 className="titleDashboard">Proximo compromisso</h6>
              <p></p>
              <br />
            </Box>
            <Box
              className="boxContent"
            >
              <h6 className="titleDashboard">Atividade física</h6>
              <p></p>
              <br />
            </Box>
          </div>
          <div className="boxConteiner">
            <Box
              className="boxContent"
            >
              <h6 className="titleDashboard">Preenchimento do perfil</h6>
              <p></p>
              <br />
            </Box>
            <Box
              className="boxContent"
            >
              <h6 className="titleDashboard">Proximo compromisso</h6>
              <p></p>
              <br />
            </Box>
            <Box
              className="boxContent"
            >
              <h6 className="titleDashboard">Atividade física</h6>
              <p></p>
              <br />
            </Box>
          </div>
        </div>
        <Appointment />
      </div>
    </div>
  );
};

export default Dashboard;
