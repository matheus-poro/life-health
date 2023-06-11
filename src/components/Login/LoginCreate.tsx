// import { useContext } from "react";
// import useForm from "../../hooks/useForm";
// import { UserContext } from "../UseContext";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
// import Error from "../Helper/Error";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginCreate = () => {
    // const username = useForm();
    // const email = useForm('email');
    // const password = useForm();

    // const { userLogin } = React.useContext(UserContext);
    // const { loading, error, request } = useFetch();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // const { url, options } = USER_POST({
        //   username: username.value,
        //   email: email.value,
        //   password: password.value,
        // });
        // const { response } = await request(url, options);
        // if (response.ok) userLogin(username.value, password.value);
    }

    return (
        <section className="form-container form-container-register">
            <div className="color-background">
                <div className="text-register">
                    <h1></h1>
                    <h2></h2>
                </div>
            </div>
            <div className="form-content">
                <div className="form">
                    <h2 className="form-title">Informações pessoais</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <Input
                            id={"fullname"}
                            type={"text"}
                            name={"fullname"}
                            label={"Nome completo"}
                            stylesLabel={"label-login"}
                            stylesInput={"input-login"}
                            stylesWrapper={undefined}
                            stylesError={undefined}
                            value={"fullname"}
                            error={false}
                        />
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
                        />
                        {/* {loading ? (
                            <Button styleBtn={"btn-search"} >Cadastrando...</Button>
                        ) : ( */}
                        {/* <Button styleBtn={"btn-search"} >Cadastrar</Button> */}
                        {/* )}
                        <Error error={error} /> */}
                    </form>
                </div>
                <div className={"login-container register"}>
                    <div className={"text-login"}>
                        <p>Já possui uma conta?</p>
                        <Link className={"link-login"} to="/login">
                            Faça login
                        </Link>
                    </div>
                    <Button styleBtn={"btn-search"} >Cadastrar</Button>
                </div>
            </div>
        </section>
    );
};
export default LoginCreate;