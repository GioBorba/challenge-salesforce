import japa from './fotoJapa.jpg'
import gio from './fotoGio.jpg'
import pedro from'./fotoPedro.jpg'
import Membro from '../../Components/Membro'
import Header from '../../Components/Header'
import './style.css'
import Footer from '../../Components/Footer'

const Equipe = () => {
    return(
        <div>
            <Header/>

            <h1 className="title-group">Equipe</h1>

            <div className="album-grupo">
                <Membro foto={japa}
                nome="Eduardo Shiraga Rodrigues"
                rm={553705}
                turma="1TDSPA"/>

                <Membro foto={gio}
                nome="Giovani Shiraishi Borba"
                rm={553724}
                turma="1TDSPA"/>

                <Membro foto={pedro}
                nome="Pedro Moreira de Jesus"
                rm={553912}
                turma="1TDSPA"/>
                
            </div>

            <Footer/>

            

           

        </div>
    )
}

export default Equipe;