import React, { useState } from 'react';
import './style.css';
import logo from '../../Components/Header/salesforce-logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const URL_API = "http://localhost:3000/usuarios";

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault(); 

        try {
            const response = await axios.post(URL_API, {
                email: email,
                password: senha,
            });
            console.log(response.data);
            alert("Login bem-sucedido!");
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Erro ao fazer login. Verifique suas credenciais e tente novamente.");
        }
    };

    return (
        <div className='body-login'>
            <Link to="/">
                <img src={logo} className="logo-login" alt="Logo" />
            </Link>
            <div className="container-login">
                <h1 className="title-login">Login</h1>
                    <form className="formulario" onSubmit={handleLogin}> 
                        <input
                            type="text"
                            className="campo-login"
                            placeholder='Usuário'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="campo-login"
                            placeholder='Senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <label className="container-checkbox">
                            <input type="checkbox" className='checkbox' />
                            Lembrar de mim
                        </label>
                        <button type="submit" className='button-login'>Entrar</button>
                    </form>
                <h3 className='forgotSenha'>Esqueceu a senha?</h3>
            </div>
            <h2 className='notClient'>Não é um cliente? <Link to="/cadastro"><button className="signup-button">Cadastre-se</button></Link> </h2>
        </div>
    );
}

export default Login;
