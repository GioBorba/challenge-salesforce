import React, { useState } from 'react';
import './style.css';
import logo from '../../Components/Header/salesforce-logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cargo, setCargo] = useState('');

    const URL_API = "api_java";

    const handleCadastro = async (event: React.FormEvent) => { 
        event.preventDefault();

        try {
            const response = await axios.post(URL_API, {
                nome: nome,
                sobrenome: sobrenome,
                empresa: empresa,
                email: email,
                senha: senha,
                telefone: telefone,
                cpf: cpf,
                cnpj: cnpj,
                nomeFantasia: nomeFantasia,
                cargo: cargo
            });
            console.log(response.data);
            alert("Cadastro bem-sucedido!");
        } catch (error) {
            console.error("Erro ao fazer cadastro:", error);
            alert("Erro ao fazer cadastro. Verifique os campos e tente novamente.");
        }
    }

    return (
        <div className="body-cadastro">
            <Link to="/">
                <img src={logo} className="logo-cadastro" alt="Salesforce Logo" />
            </Link>

            <div className="container-cadastro">
                <h1 className="title-cadastro">Cadastro</h1>
                    <form className='formulario-cadastro' onSubmit={handleCadastro}> 
                        <div className="nome-sobrenome">
                            <input 
                                type="text" 
                                className="campo-cadastro" 
                                placeholder='Nome'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            <input 
                                type="text" 
                                className="campo-cadastro" 
                                placeholder='Sobrenome'
                                value={sobrenome}
                                onChange={(e) => setSobrenome(e.target.value)}
                            />
                        </div>
                        <input 
                            type="text" 
                            className="campo-cadastro" 
                            placeholder='CPF'
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />

                        <input 
                            type="tel" 
                            className="campo-cadastro" 
                            placeholder='Telefone'
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                        <input 
                            type="text" 
                            className="campo-cadastro" 
                            placeholder='Empresa'
                            value={empresa}
                            onChange={(e) => setEmpresa(e.target.value)}
                        />
                        <input 
                            type="text" 
                            className="campo-cadastro" 
                            placeholder='Nome Fantasia'
                            value={nomeFantasia}
                            onChange={(e) => setNomeFantasia(e.target.value)}
                        />
                        <input 
                            type="text" 
                            className="campo-cadastro" 
                            placeholder='Cargo'
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                        />
                        <input 
                            type="text" 
                            className="campo-cadastro" 
                            placeholder='CNPJ'
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                        />
                        <input 
                            type="email" 
                            className="campo-cadastro" 
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            className="campo-cadastro" 
                            placeholder='Senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <label className="container-checkbox">
                            <input type="checkbox" className='checkbox' />
                            Concordo com os termos de acordo
                        </label>
                        <button type="submit" className='button-cadastro'>Cadastrar</button>
                    </form>
            </div>

            <h2 className='temConta'>Já tem uma conta? <Link to="/login"><button className="signin-button">Logar</button></Link> </h2>
        </div>
    )
}

export default Cadastro;
