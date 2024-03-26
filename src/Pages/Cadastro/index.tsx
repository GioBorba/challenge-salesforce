import React from 'react';
import './style.css';
import logo from '../../Components/Header/salesforce-logo.png';
import { Link } from 'react-router-dom';

const Cadastro = () => {
    return(
        <div className="body-cadastro">
            <Link to="/">
                <img src={logo} className="logo-cadastro" alt="Salesforce Logo" />
            </Link>

            <div className="container-cadastro">
                <h1 className="title-cadastro">Cadastro</h1>
                <section className='section-input'>
                    <div className="nome-sobrenome">
                        <input type="text" className="campo-cadastro" placeholder='Nome' />
                        <input type="text" className="campo-cadastro" placeholder='Sobrenome' />
                    </div>
                    <input type="email" className="campo-cadastro" placeholder='Empresa' />
                    <input type="text" className="campo-cadastro" placeholder='Email' />
                    <input type="password" className="campo-cadastro" placeholder='Senha' />
                    <label className="container-checkbox">
                        <input type="checkbox" className='checkbox' />
                        Concordo com os termos de acordo
                    </label>
                </section>

                <button className='button-cadastro'>Cadastrar</button>
            </div>

            <h2 className='temConta'>Já tem uma conta? <Link to="/login"><button className="signin-button">Logar</button></Link> </h2>
        </div>
    )
}

export default Cadastro;
