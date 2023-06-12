import React, { useState } from "react";
import "./style.css";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

const Settings = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleDateOfBirthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(event.target.value);
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value);
  };

  // Envia para o servidor
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // console.log("Dados atualizados:", {
    //   fullName,
    //   email,
    //   password,
    //   dateOfBirth,
    //   weight,
    //   height,
    // });
  };

  return (
    <div>
      <Sidebar />
      <div className="container settings-page"> 
      <h2>Configurações</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome completo:
            <input type="text" value={fullName} onChange={handleFullNameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Senha:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <label>
            Data de Nascimento:
            <input type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} />
          </label>
          <label>
            Peso:
            <input type="text" value={weight} onChange={handleWeightChange} />
          </label>
          <label>
            Altura:
            <input type="text" value={height} onChange={handleHeightChange} />
          </label>
          <button type="submit" className="save-btn">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
