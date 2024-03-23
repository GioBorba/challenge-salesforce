import Footer from "../../Components/Footer";
import Header from "../../Components/Header"
import './style.css'

const SC = () => {
    return(
        <div>
            <Header/>

            <h1 className="title-SC">Sales Cloud</h1>

            <div className="ball">
                <h2 className="title2-SC">Atendimento escalável que encanta os clientes.</h2>
                <p className="title2-txt">Maximize o ROI e impulsione a eficiência, desde a central de contatos ao atendimento externo, tudo em uma única plataforma.</p>

            </div>

            <img className="SC-img" src="https://www.salesforce.com/content/dam/web/en_au/www/images/products/service-cloud/svc-jumbo-update-magic-au.png"></img>

            <img className='bird' src="https://www.salesforce.com/content/dam/web/en_us/www/images/marketing-cloud/overview/mc-bird.png"></img>


            <h2 className="title3-SC">Reduza custos e impulsione a eficiência com o Service Cloud</h2>

            <img className="doodle-astro" src='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/05/marquee-servicecloud-coreservice.webp?resize=1024,1024'/>

            <div className="topics">
                <ul>
                    <li className="topic">
                        <p className="topic-txt">Adquira escalabilidade em todos os processos de atendimento, graças à automação.</p>
                        <p className="topic-exp">Automatize processos e capacite as equipes a fazerem mais com menos.</p>
                    </li>

                    <li className="topic second">
                        <p className="topic-txt">Personalize cada engajamento com IA.</p>
                        <p className="topic-exp">Unifique dados para humanizar interações de maneira inteligente, impulsionando a fidelidade.</p>
                    </li>

                    <li className="topic third">
                        <p className="topic-txt">Conecte todos os canais em tempo real com o Service Cloud Genie.</p>
                        <p className="topic-exp">Facilite a vida dos clientes, graças a experiências conectadas, desde a interação digital até o atendimento em campo.

</p>
                    </li>

                </ul>
                

            </div>

            <img className="doodle-rino" src='https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Max.png'/>

            <h2 className="title4-SC">Veja o Feedback de clientes satisfeitos.</h2>

            <div className="container-feedback">
                <section className="feedback">
                    <img className="client" src="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/06/service-customer-sonos.webp?resize=1024,1024"/>
                    <img className="aspas" src="https://cdn-icons-png.flaticon.com/512/63/63204.png"/>
                    <p className="feedback-txt">A Salesforce nos permitiu dimensionar e oferecer suporte a todos os nossos clientes, à medida que atingimos um período de enorme crescimento.</p>
                    <p className="feedback-txt name">Patrick Spence <br/>CEO, Sonos</p>
                </section>

                <section className="feedback">
                    <img className="client" src="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/06/customer-service-gohenry.webp?resize=1024,1024"/>
                    <img className="aspas" src="https://cdn-icons-png.flaticon.com/512/63/63204.png"/>
                    <p className="feedback-txt">Cada cliente é único. O Service Cloud com certeza nos permite fomentar uma relação positiva com nossos clientes, porque com ele temos tudos em uma só plataforma.</p>
                    <p className="feedback-txt name">Beau McDonald <br/>Atendente para Associados, GoHenry</p>
                </section>

                <section className="feedback">
                    <img className="client" src="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/06/service-customer-penfed.webp?resize=1024,1024"/>
                    <img className="aspas" src="https://cdn-icons-png.flaticon.com/512/63/63204.png"/>
                    <p className="feedback-txt">Fico animada com o que conseguimos oferecer por meio do nosso conhecimento, da nossa comunidade de suporte e dos chatbots que ajudam as pessoas a encontrar respostas com mais rapidez.</p>
                    <p className="feedback-txt name">Nicole LaCamp<br/> Vice-Presidente de Integração de Estratégias Operacionais, PenFed</p>
                </section>
            </div>

            <Footer/>


        </div>
    )
}

export default SC;