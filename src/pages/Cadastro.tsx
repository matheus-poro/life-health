
import "./style.css";
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import DocImg from "../assets/img/login/img-login.png"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserType } from "../store/slices/lifeHealthDataSlice";

const Cadastro = () => {

  const dispatch = useDispatch();

  const definingUserType = (type: string) => {
    dispatch(setUserType(type));
  }

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
            <Link to="/login/criar" onClick={() => definingUserType("doctor")}>
              <div className="icone-cadastro"><MedicalServicesOutlinedIcon /> </div>
              <b className="sou-paciente">Sou médico</b>
              <p>Gostaria de ser monitorado por médicos e profisssionais da saúde </p>
            </Link>
          </div>

          <div className="instance-child">
            <Link to="/login/criar" onClick={() => definingUserType("user")}>
              <div className="icone-cadastro"> <SentimentVerySatisfiedOutlinedIcon /> </div>
              <b className="sou-paciente">Sou paciente</b>
              <p>Gostaria de ser monitorado por médicos e profisssionais da saúde</p>
            </Link>
          </div>

        </div>
        <img className="mask-group-icon" alt="Mulher médica" src={DocImg} />
      </div>
    </>

  );
};

export default Cadastro;
