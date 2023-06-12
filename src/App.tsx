import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store/store";
import LoginForm from './components/Login/LoginForm';
import LoginCreate from './components/Login/LoginCreate';
import Dashboard from './pages/Dashboard';
import Cadastro from './pages/Cadastro';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login/criar" element={<LoginCreate />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cadastro" element={<Cadastro />} />
            {/* Apenas para teste, deve ser atualizado para :id */}
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
