import { Link } from 'react-router-dom';
import './style.css'

const Footer = () => {
    return(
        <div className="footer">
                <a href="https://www.salesforce.com/company/legal/">Legal</a>
                <a href="https://www.salesforce.com/company/legal/sfdc-website-terms-of-service/">Termos de serviços</a>
                <a href="https://www.salesforce.com/br/">Site Oficial</a>
                <a href="https://www.salesforce.com/br/form/contact/contactme/">Contato</a>
                <Link to="/equipe">Equipe</Link>
        </div>
    )
}

export default Footer;