// import { useContext } from "react";
// import useForm from "../../hooks/useForm";
// import { UserContext } from "../UseContext";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
// import Error from "../Helper/Error";
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./Login.css";
import ImgCreate from "./ImgCreate";

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
            <div className="effect"></div>
            <ImgCreate />
            <div className="form-content">
                <div className="form">
                    <h2 className="form-title">Cadastre-se para ter acesso</h2>
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
                        <FormControl className="radio-group">
                            {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Mulher" />
                                <FormControlLabel value="male" control={<Radio />} label="Homem" />
                            </RadioGroup>
                        </FormControl>
                        <Input
                            id={"dataOfBirth"}
                            type={"data"}
                            name={"dataOfBirth"}
                            label={"Data de nascimento"}
                            stylesLabel={"label-login"}
                            stylesInput={"input-login"}
                            stylesWrapper={undefined}
                            stylesError={undefined}
                            value={"dataOfBirth"}
                            error={false}
                        />
                        <div className="form-privacy-policy">
                            <RadioGroup
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="" control={<Radio />} label="" />
                            </RadioGroup>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                Ao se cadastrar voce concorda com
                                a nossa <b>política de privacidade.</b>
                            </FormLabel>
                        </div>                        {/* {loading ? (
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
                        <Link className={"link-login"} to="/">
                            Faça login
                        </Link>
                    </div>
                </div>
                <Button styleBtn={"btn-search btn-container"} >Cadastrar</Button>
            </div>
        </section>
    );
};
export default LoginCreate;