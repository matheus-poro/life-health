import "./style.css";
import { FormEvent, useContext } from "react";
import { Link } from "react-router-dom";
import "../components/Login/Login.css";
import ImgLogin from "../components/Login/ImgLogin";
import Input from "../components/Forms/Input/Input";
import Button from "../components/Forms/Button/Button";

function CadastroUser() {

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }


  return (
    <section className="form-container">
      <div className="effect"></div>
      <ImgLogin />
      <div className="form-content">
        <div className="form">
          <h2 className="form-title">Bem-vindo de volta!</h2>
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
            <Input
              id={"full name"}
              type={"text"}
              name={"full name"}
              label={"Nome"}
              stylesLabel={"label-login"}
              stylesInput={"input-login"}
              stylesWrapper={undefined}
              stylesError={undefined}
              value={"full name"}
              error={false}
            />
            <Input
              id={"birth"}
              type={"text"}
              name={"birth"}
              label={"Nascimento"}
              stylesLabel={"label-login"}
              stylesInput={"input-login"}
              stylesWrapper={undefined}
              stylesError={undefined}
              value={"birth"}
              error={false}
            />
            <Input
              id={"weight"}
              type={"text"}
              name={"weight"}
              label={"Peso"}
              stylesLabel={"label-login"}
              stylesInput={"input-login"}
              stylesWrapper={undefined}
              stylesError={undefined}
              value={"weight"}
              error={false}
            />
            {/* {loading ? (
                <Button styleBtn={"btn-search"} >Carregando...</Button>
            ) : ( */}
            {/* <Button styleBtn={"btn-search"} >Login</Button> */}
            {/* )}
            <Error error={error && 'Dados incorretos.'} /> */}
          </form>
        </div>

        <Button styleBtn={"btn-search btn-login"} disabled={false}>Login</Button>
      </div>
    </section>
  );
}

export default CadastroUser;
