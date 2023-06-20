import Img from '../../assets/img/login/img-create.png';
import "./Login.css";

const ImgCreate = () => {
    return (
        <div className="img-login-container">
            <div className="img-container">
                <img src={Img} alt="Medidor de presão" className="img-content" />
            </div>
        </div>
    );
}
export default ImgCreate;