
import "./style.css";
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import DocImg from "../assets/img/login/img-login.png"
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <>
      <div className="effectboo"></div>
      <div className="container">
        <div className="macbook-air-2">

          <div className="title-page-cadastro">
            <h1>Olá, bem vindo a página de cadastro! </h1>
            <p>Vamos começar por quem você é: </p>
          </div>

          <div className="instance-child">
            <Link to="/login/criar">
              <div className="icone-cadastro"><MedicalServicesOutlinedIcon /> </div>
              <b className="sou-paciente">Sou médico</b>
              <p>Gostaria de ser monitorado por médicos e profisssionais da saúde </p>
            </Link>
          </div>

          <div className="instance-child">
            <Link to="/login/criar">
              <div className="icone-cadastro"> <SentimentVerySatisfiedOutlinedIcon /> </div>
              <b className="sou-paciente">Sou paciente</b>
              <p>Gostaria de ser monitorado por médicos e profisssionais da saúde</p>
            </Link>
          </div>

        </div>
        <img className="mask-group-icon" alt="" src={DocImg} />
      </div>

    </>

  );
};

export default Cadastro;
