import './style.css'

type MembroProps = {
    foto : string;
    nome : string;
    rm : number;
    turma : string;
}

const Membro : React.FC<MembroProps> = ({foto, nome,rm, turma}) => {
    return(
        <div>
            <div className="grupo">
                <img src={foto} className="foto"></img>
                <p className="info">{nome}</p>
                <p className="info"> RM{rm} - {turma}</p>
            </div>
        </div>
    )
}

export default Membro;  