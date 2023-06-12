import React, { useState } from "react";
import "../../Appointment/style.css";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState("");

  const handleIconClick = (iconName: any) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="logo"></div>
      </div>
      <div
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
