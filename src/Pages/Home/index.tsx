import './style.css'
import Subheader from '../../Components/SubHeader/index.tsx'
import Card from '../../Components/Card/index.tsx'
import Client from '../../Components/Client/index.tsx'
import Footer from '../../Components/Footer/index.tsx'
import Header from '../../Components/Header/index.tsx'
import { Link } from 'react-router-dom'
    


const Home = () => {
    return(
        <div>

            <Header/>
            <Subheader/>
            <h1 className="title2-home">O que a Salesforce oferece?</h1>
            <img className='bird-home um' src="https://www.salesforce.com/content/dam/web/en_us/www/images/marketing-cloud/overview/mc-bird.png"></img>
            <div className="album">
                <Link to="/produto-crm"><Card image= 'https://colaninfotech.com/wp-content/uploads/2023/02/crmblock.jpg'
                product="CRM"
                description="CRM é a sigla usada para Customer Relationship Management e se refere ao conjunto de práticas,
                estratégias de negócio e tecnologias focadas no relacionamento com o cliente."/></Link>
                
                <Link to="/produto-marketingcloud"><Card image="https://cynoteck.com/wp-content/uploads/2022/06/Salesforce-Marketing-Cloud-min.png"
                product="Marketing Cloud"
                description='Atraia clientes. Gere mais engajamento.
                Construa relações duradouras.
                Tudo isso graças ao marketing digital baseado em dados.'/></Link>
                
                <Link to="/produto-servicecloud">
                <Card image="https://media.licdn.com/dms/image/D5612AQGJ0tKDkVjHMw/article-cover_image-shrink_600_2000/0/1676653912277?e=2147483647&v=beta&t=hnE9507KJxtEpH-8px8pyIDBrF7FOBIJuo9_Nc7s9M8"
                product="Service Cloud"
                description='Impulsione a eficiência e expanda o atendimento eficaz,
                entregando uma experiência de atendimento e suporte personalizados e alimentados por IA para todos os clientes.'/>
                </Link>
            
            
            </div>

            <img className='bird-home' src="https://www.salesforce.com/content/dam/web/en_us/www/images/marketing-cloud/overview/mc-bird.png"></img>

            

            <div className='parceiros'>
            
            <h2 className="subtitle">Conheça alguns de nossos clientes e parceiros!</h2>

            <div className='clientes'>

                <Client imagem='data:image/png;base64,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'
                nome="Gympass"/>

                <Client imagem="https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/26186/sumup-logo.png"
                nome="Sumup" />

                <Client imagem="https://www.agoramotor.com.br/wp-content/uploads/2022/12/logo-vipal-1024x576.jpg"
                nome="Vipal Borrachas" />

                <Client imagem="https://s17401.pcdn.co/wp-content/uploads/2022/02/Tigre-logo.png"
                nome="Grupo Tigre" />

                </div>


                </div>

                <img className='image-doodle' src="https://pbs.twimg.com/media/FOZBHgEXMAE3J1p.png"></img>
                <Footer/>

            </div>
    )
}

export default Home;