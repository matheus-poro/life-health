import React, { useState } from "react";
import "../../Appointment/style.css";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { initFirebase } from "../../../services/firebase";
import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState("");
  const [isNavigate, setIsNavigate] = useState<boolean>(false);

  const app = initFirebase();
  const auth = getAuth(app);

  const handleIconClick = (iconName: any) => {
    setActiveIcon(iconName);
    if (iconName === "logout") {
      auth.signOut().then(() => {
        console.log("Usuário deslogado com sucesso");
        setTimeout(() => {
          setIsNavigate(true)
        }, 2000);
      }).catch((error) => {
        console.log("Error", error);
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="logo"></div>
        {isNavigate && (
          <Navigate to="/" replace={true} />
        )}
      </div>
      <div
        className={`sidebar-inner ${activeIcon === "time" ? "active" : ""}`}
        onClick={() => handleIconClick("perfil")}
      >
        <AssignmentIcon />
      </div>      <div
        className={`sidebar-inner ${activeIcon === "time" ? "active" : ""}`}
        onClick={() => handleIconClick("time")}
      >
        <AccessTimeOutlinedIcon />
      </div>
      <div
        className={`sidebar-inner ${activeIcon === "today" ? "active" : ""}`}
        onClick={() => handleIconClick("today")}
      >
        <TodayOutlinedIcon />
      </div>
      <div
        className={`sidebar-inner ${activeIcon === "settings" ? "active" : ""}`}
        onClick={() => handleIconClick("settings")}
      >
        <SettingsOutlinedIcon />
      </div>
      <div
        className={`sidebar-inner ${activeIcon === "logout" ? "active" : ""}`}
        onClick={() => handleIconClick("logout")}
      >
        <LogoutOutlinedIcon />
      </div>
    </div>
  );
};

export default Sidebar;
