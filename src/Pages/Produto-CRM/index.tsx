import Footer from "../../Components/Footer";
import Header from "../../Components/Header"
import './style.css'

const CRM = () => {
    return(
        <div>
            <Header/>
            <h1 className="title-crm">Customer Relationship Management</h1>

            <img className="doodle-bear" src="https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Codey.png"/>
            <section className="text-box">Um conjunto de práticas, estratégias de negócio e tecnologias focadas no relacionamento com o cliente. A definição de CRM vai além: é uma gestão 360º de vendas, marketing, atendimento e todos os pontos de contato.
Estamos na era do cliente, da transformação digital, das novas tecnologias. Nesse cenário, o relacionamento também evoluiu, levando a um novo conceito também conhecido como experiência do cliente. O conceito de CRM significa ser centrado no cliente. É estratégia, é um processo, é ferramenta e tecnologia.
As plataformas de CRM estão na lista das tecnologias corporativas mais importantes e inovadoras disponíveis para empresas. Por quê? Pelo modo como utilizam as informações dos clientes para gerenciar contas, leads e oportunidades de vendas em um único local.</section> 

            <h1 className="title2">O que faz o CRM?</h1>
            <p className="crm-txt">O CRM armazena informações de clientes atuais e potenciais – nome, endereço, número de telefone, etc –, e suas atividades e pontos de contato com a empresa, incluindo visitas a sites, ligações telefônicas, e-mails, entre outras interações.Entretanto, o software de CRM não é apenas uma lista de contatos elaborada: ele reúne e integra dados valiosos para preparar e atualizar suas equipes com informações pessoais dos clientes, histórico e preferência de compras.</p>
            <img className="doodle-goat" src="https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrationsCloudy.png"/>

            <h2 className="title3">Um software de CRM: </h2>

            <div className="container-crm">
                <section className="items">
                    <img className="item-image" src='https://www.salesforce.com/content/dam/web/pt_br/www/images/crm/what-is-crm/crm_card--track-200x100.jpg'/>
                    <p className="item-txt">Rastreia ativamente e gerencia as informações dos clientes.</p>

                </section>

                <section className="items">
                    <img className="item-image" src="https://www.salesforce.com/content/dam/web/pt_br/www/images/crm/what-is-crm/crm_card--conect-200x100.jpg"/>
                    <p className="item-txt">Conecta toda a sua equipe em qualquer dispositivo.</p>
                </section>

                <section className="items">
                    <img className="item-image" src="https://www.salesforce.com/content/dam/web/pt_br/www/images/crm/what-is-crm/crm_card--capture-200x100.jpg"/>
                    <p className="item-txt">Captura de forma inteligente os e-mails dos clientes.</p>
                </section>

                
                <section className="items">
                    <img className="item-image" src="https://www.salesforce.com/content/dam/web/pt_br/www/images/crm/what-is-crm/crm_card--simple-200x100.jpg"/>
                    <p className="item-txt">Simplifica tarefas repetitivas para que você possa fazer um acompanhamento de leads mais efetivo.</p>
                </section>

                <section className="items">
                    <img className="item-image" src="https://www.salesforce.com/content/dam/web/pt_br/www/images/crm/what-is-crm/crm_card--recommendation-200x100.jpg"></img>
                    <p className="item-txt">Fornece recomendações e insights instantâneos.</p>
                </section>

                <section className="items">
                    <img className="item-image" src="https://www.salesforce.com/content/dam/web/pt_br/www/images/crm/what-is-crm/crm_card--grow-200x100.jpg"></img>
                    <p className="item-txt">Expande e personaliza conforme o crescimento da sua empresa.</p>
                </section>

                


            </div>

            <h1 className="title-important">Por que o CRM é importante e quais os benefícios?</h1>
                <p className="texto">Um CRM ajuda sua empresa a dispensar os processos obsoletos e o esforço manual para que o seu negócio possa progredir. A plataforma organiza as contas e contatos de forma acessível, em tempo real, acelerando e simplificando o processo de vendas.
Em vez de ficar preso a lembretes em notas adesivas amarelas ou imerso em planilhas, você passa leads para sua equipe de vendas de forma rápida e fácil: cada membro da equipe, independentemente de onde esteja e o que esteja fazendo, está sempre trabalhando com informações atualizadas sobre os clientes e suas interações com a empresa.</p>

            <h2 className="title3">Com uma plataforma de CRM:</h2>

            <div className="container-plataforma">

                <section className="elemento">
                    <img className="elemento-img a" src="https://www.salesforce.com/content/dam/web/pt_br/www/images/crm/what-is-crm/crm_data-37-350x250.png"/>
                    <p className="elemento-txt">Você encontra mais leads, fecha mais negócios, mantém mais clientes e começa a expandir sua empresa com um aumento de 37% nas receitas de vendas.</p>

                </section>

                <section className="elemento">
                    <img className="elemento-img b" src="https://www.salesforce.com/content/dam/web/pt_br/www/images/crm/what-is-crm/crm_data-45-350x250.png"/>
                    <p className="elemento-txt">Suas conversas são sempre pessoais, relevantes e atualizadas, gerando 45% de aumento na satisfação do cliente.</p>

                </section>

                <section className="elemento">
                    <img className="elemento-img c" src="https://www.salesforce.com/content/dam/web/pt_br/www/images/crm/what-is-crm/crm_data-43-350x250.png"/>
                    <p className="elemento-txt">Os clientes da Salesforce relatam um ROI* em marketing 43% melhor com o uso do CRM.</p>
                </section>


            </div>

            <div className="container-last-crm">
                <section className="conteudo-crm">
                    <h1 className="title-crm-conteudo">CRM e Vendas</h1>
                    <p className="conteudo-crm-container">Quando se pensa em CRM para vendas, estamos falando da parte de um CRM que se propõe ajudar sua empresa a vender mais em menos tempo. De forma inteligente, o CRM realiza tarefas simples de forma automatizada para que sua equipe possa focar nas etapas importantes para a conversão de vendas.</p>
                </section>

                <section className="conteudo-crm">
                    <h1 className="title-crm-conteudo">CRM e Marketing</h1>
                    <p className="conteudo-crm-container">Estamos acostumados a associar CRM às vendas, mas o marketing também é essencial no relacionamento com o cliente. Ao integrar processos de marketing e vendas, você pode acompanhar a jornada do cliente por todo o funil.
As empresas não precisam mais serem passivas ao esperarem que um possível comprador entre em contato, elas podem sair na frente com estratégias e objetivos de negócios construídos com base na realidade disruptiva, acelerada e ultraconectada que estamos vivendo.</p>
                </section>

                
            </div>

            <img className='bird' src="https://www.salesforce.com/content/dam/web/en_us/www/images/marketing-cloud/overview/mc-bird.png"></img>

            <section className="conteudo-crm dois">
                    <h1 className="title-crm-conteudo">CRM e Atendimento ao Cliente</h1>
                    <p className="conteudo-crm-container">Se precisarmos definir atendimento ao cliente, diríamos que é todo o suporte que você oferece aos seus clientes antes, durante ou depois da compra.
O relacionamento é impossível sem o atendimento, ainda mais quando ele está se transformando na experiência do cliente. Sua empresa precisa estar preparada para resolver problemas rapidamente e oferecer uma forma de autoatendimento fácil, intuitiva, disponível 24 horas por dia em todos os dispositivos. Como? Com um CRM focado no atendimento 360º.</p>
                </section>

            
            <Footer/>

        </div>
    )

}

export default CRM;