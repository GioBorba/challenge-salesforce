import './style.css'
import logo from '../../Components/Header/salesforce-logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className='body-login'>
            <Link to="/">
                <img src={logo} className="logo-login"></img>
            </Link>

            <div className="container-login">
                <h1 className="title-login">Login</h1>
                <section className='section-input'>
                    <input type="text" className="campo-login" placeholder='Usuário'></input>
                    <input type="text" className="campo-login" placeholder='Senha'></input>
                    <label className="container-checkbox">
                        <input type="checkbox" className='checkbox'></input>
                        Lembrar de mim
                    </label>
                </section>


                <button className='button-login'>Entrar</button>
                <h3 className='forgotSenha'>Esqueceu a senha?</h3>
            </div>

            <h2 className='notClient'>Não é um cliente? <Link to="/cadastro"><button className="signup-button">Cadastre-se</button></Link> </h2>
        </div>
    )
}

export default Login;