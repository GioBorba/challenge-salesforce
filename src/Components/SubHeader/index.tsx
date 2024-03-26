import './style.css'
import image1 from './image1.png'
const Subheader = () => {
    return(
        <div className="subheader">
            <div className="header-text">
                <h2>Entregue sucesso agora com o Salesforce Customer 360</h2>
                <section className='botoes'>
                    <a href="https://www.salesforce.com/br/form/signup/salesforce-starter/"><button>Teste gratuito</button></a>
                    <a href="https://www.salesforce.com/br/form/starter/overview-demo/"><button>Assista à demo</button></a>
                </section>
                
                <p>O Customer 360 é a nossa suíte de produtos e serviços que ajuda
                    98% dos clientes a alcançar ou superar suas metas de ROI.
                </p>
            </div>

            <div className='header-img'>
                <img className='imgCustomer' src={image1}></img>
            </div>
        </div>
    );
}

export default Subheader;