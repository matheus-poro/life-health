import { useContext } from "react";
import useForm from "../../hooks/useForm";
import { UserContext } from "../UseContext";
import ImgLogin from "./ImgLogin";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import Error from "../Helper/Error";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginForm = () => {
    // const username = useForm("Username");
    // const password = useForm("password");

    // const { userLogin, error, loading }: any = useContext(UserContext);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // if (username.validate() && password.validate()) {
        //     userLogin(username.value, password.value);
        // }
    }

    return (
        <section className="form-container">
            <div className="effect"></div>
            <ImgLogin />
            <div className="form-content">
                <div className="form">
                    <h2 className="form-title">Bem-vindo de volta !</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <Input
                            id={"username"}
                            type={"text"}
                            name={"username"}
                            label={"E-mail"}
                            stylesLabel={"label-login"}
                            stylesInput={"input-login"}
                            stylesWrapper={undefined}
                            stylesError={undefined}
                            value={"username"}
                            error={false}
                        // {...username}
                        />
                        <Input
                            id={"password"}
                            type={"password"}
                            name={"password"}
                            label={"Senha"}
                            stylesLabel={"label-login"}
                            stylesInput={"input-login"}
                            stylesWrapper={undefined}
                            stylesError={undefined}
                            value={"password"}
                            error={false}
                        // {...password}
                        />
                        {/* {loading ? (
                            <Button styleBtn={"btn-search"} >Carregando...</Button>
                        ) : ( */}
                        {/* <Button styleBtn={"btn-search"} >Login</Button> */}
                        {/* )}
                        <Error error={error && 'Dados incorretos.'} /> */}
                    </form>
                </div>
                <div className={"lost-password"}>
                    <Link to="/login/perdeu">
                        Perdeu a Senha?
                    </Link>
                </div>
                <Button styleBtn={"btn-search btn-login"} >Login</Button>

                <div className={"register-container"}>
                    <div className={"text-register-container"}>
                        <p>Não tem conta?</p>
                        <Link className={"register"} to="/login/criar">
                            Cadastre-se
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default LoginForm;