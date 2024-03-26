import logo from './salesforce-logo.png'
import user from './user.png'
import './style.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="header">
            <div className="left-side">
                <Link to="/">
                    <img className="logo" src={logo}></img>
                </Link>

                <input className='searchbar' type="text" placeholder="Pesquisar..."/>         
            </div>

            <div className='right-side'>
                <h2 className="links"><Link to="/empresa">Empresa</Link></h2>
                <h2 className="links"><a href="https://www.salesforce.com/br/solutions/industries/">Indústrias</a></h2>
                <h2 className="links"> <img className="user" src={user}/>
                    <Link to="/login">Login</Link> | <Link to="/cadastro">Cadastro</Link> </h2>
            </div>
        </div>
    )
}
export default Header;