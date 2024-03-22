import Header from "../../Components/Header"
import './style.css'

const CRM = () => {
    return(
        <div>
            <Header/>
            <h1 className="title">Customer Relationship Management</h1>

            <img className="doodle-bear" src="https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Codey.png"/>
            <section className="text-box">Um conjunto de práticas, estratégias de negócio e tecnologias focadas no relacionamento com o cliente. A definição de CRM vai além: é uma gestão 360º de vendas, marketing, atendimento e todos os pontos de contato.
Estamos na era do cliente, da transformação digital, das novas tecnologias. Nesse cenário, o relacionamento também evoluiu, levando a um novo conceito também conhecido como experiência do cliente. O conceito de CRM significa ser centrado no cliente. É estratégia, é um processo, é ferramenta e tecnologia.
As plataformas de CRM estão na lista das tecnologias corporativas mais importantes e inovadoras disponíveis para empresas. Por quê? Pelo modo como utilizam as informações dos clientes para gerenciar contas, leads e oportunidades de vendas em um único local.</section> 

            <h1 className="title2">O que faz o CRM?</h1>
            <p className="crm-txt">O CRM armazena informações de clientes atuais e potenciais – nome, endereço, número de telefone, etc –, e suas atividades e pontos de contato com a empresa, incluindo visitas a sites, ligações telefônicas, e-mails, entre outras interações.Entretanto, o software de CRM não é apenas uma lista de contatos elaborada: ele reúne e integra dados valiosos para preparar e atualizar suas equipes com informações pessoais dos clientes, histórico e preferência de compras.:</p>
            <img className="doodle-goat" src="https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrationsCloudy.png"/>

            <h2 className="title3">Um software de CRM: </h2>

            <div className="container">
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

        </div>
    )

}

export default CRM;