import Img from '../../assets/img/login/img-login.png';
import "./Login.css";

const ImgLogin = () => {
    return (
        <div className="img-login-container">
            <div className="img-container">
                <img src={Img} alt="Mulher medica" className="img-content" />
            </div>
        </div>
    );
}
export default ImgLogin;