import Footer from "../../Components/Footer";
import Header from "../../Components/Header"
import './style.css'

const MC = () => {
    return(
        <div>
            <Header/>

            <h1 className="title-MC">Marketing Cloud</h1>

            <div className="container-MC">
                <section className="section-MC">

                    <h2 className="title2-MC">Faça cada momento valer a pena para alcançar o sucesso imediato</h2>
                    <p className="title2-txt">Atraia clientes. Gere mais engajamento.
    Construa relações duradouras.Tudo isso graças ao marketing digital baseado em dados.</p>
                </section>

                <img className="MC-img" src="https://www.salesforce.com/content/dam/web/en_us/www/images/marketing-cloud/overview/marketing-overview-jt.png"/>


                

            </div>

            <h2 className="title3-MC">Torne seu investimento em marketing mais eficaz com o Marketing Cloud</h2>

            <img className='bird' src="https://www.salesforce.com/content/dam/web/en_us/www/images/marketing-cloud/overview/mc-bird.png"></img>

            <div className="topics">
                <ul>
                    <li className="topic">
                        <p className="topic-txt">Automatize o engajamento em todos os canais.</p>
                        <p className="topic-exp">Economize tempo e recursos na entrega de conteúdos relevantes por email, na Web, por dispositivos móveis e muito mais.</p>
                    </li>

                    <li className="topic second">
                        <p className="topic-txt">Otimize a performance de marketing com insights inteligentes</p>
                        <p className="topic-exp">Impulsione o ROI e otimize investimentos em marketing com uma análise de dados unificada e baseada em IA.</p>
                    </li>

                    <li className="topic third">
                        <p className="topic-txt">Personalize momentos com dados em tempo real, graças ao Salesforce Genie</p>
                        <p className="topic-exp">Alcance clientes em momentos decisivos. Potencialize sua estratégia usando dados em tempo real em diversos canais e equipes.

</p>
                    </li>

                </ul>
                

            </div>

            <img className="doodle-fox" src='https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Brandy.png'/>
            

            <div className="MC-details">
                <section className="details-text">
                    <h2 className="MC-title4">Pronto para saber mais sobre o Marketing Cloud? Vamos conversar.</h2>
                    <p className="title4-txt">Pergunte sobre os produtos, os preços, a implementação ou qualquer outro assunto relacionado ao Salesforce. Nossos agentes altamente treinados estão preparados e disponíveis para ajudar. Não é necessário cartão de crédito. Sem necessidade de instalar nenhum software. Acesse nossa plataforma de marketing digital líder de mercado, desenvolvida com o melhor CRM do mundo.</p>
                    <a href="#"><button className="button">FALE CONOSCO</button></a>
                </section>
                <section className="ball">
                    <img className="title4-image" src='https://www.salesforce.com/content/dam/web/en_us/www/images/resource-center/footer.png'/>
                </section>
                
            </div>

            <Footer/>

        </div>
    )
}

export default MC;