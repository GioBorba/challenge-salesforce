import logo from './salesforce-logo.png'
import user from './user.png'
import './style.css'
const Header = () => {
    return(
        <div className="header">
            <div className="left-side">
                <img className="logo" src={logo}></img>
                <input className='searchbar' type="text" placeholder="Pesquisar..."/>         
            </div>

            <div className='right-side'>
                <h2 className="links"><a href="#">Empresa</a></h2>
                <h2 className="links"><a href="#">Serviços</a></h2>
                <h2 className="links"> <img className="user" src={user}/>
                    <a href="#">Login</a> | <a href="#">Cadastro</a> </h2>
            </div>
        </div>
    )
}
export default Header;