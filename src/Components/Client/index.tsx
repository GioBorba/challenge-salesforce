import './style.css'
type ClientProps = {
    imagem : string;
    nome : string;
}

const Client : React.FC<ClientProps> = ({imagem, nome}) => {
    return(
        <div className="clientela">
            <img className="foto-cliente" src={imagem} />
            <p className="nome">{nome}</p>
        </div>
    )
}

export default Client;