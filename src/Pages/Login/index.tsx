import './style.css'
import logo from '../../Components/Header/salesforce-logo.png'

const Login = () => {
    return(
        <div>
            
            <img src={logo} className="logo"></img>

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
                <h3>Esqueceu a senha?</h3>
            </div>

            <h2>Não é um cliente? <button className="signup-button">Cadastre-se</button></h2>
        </div>
    )
}

export default Login;