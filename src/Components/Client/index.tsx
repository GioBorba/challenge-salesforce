import './style.css'
type ClientProps = {
    imagem : string;
    nome : string;
}

const Client : React.FC<ClientProps> = ({imagem, nome}) => {
    return(
        <div className="clientela">
            <img className="foto" src={imagem} />
            <p className="name">{nome}</p>
        </div>
    )
}

export default Client;