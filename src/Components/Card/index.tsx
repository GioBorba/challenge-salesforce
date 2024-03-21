import "./style.css"

type CardProps = {
    image : string;
    product : string;
    description : string;
} 


const Card  : React.FC<CardProps> = ({image, product, description}) => {
    return(
        <div className="card">
            <img src= {image} className="image-product"/>
            <p className="product"><h1>{product}</h1></p>
            <p className="description">{description}</p>
        </div>
    )
}

export default Card;