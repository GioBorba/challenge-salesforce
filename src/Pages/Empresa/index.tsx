//Sobre a empresa

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./style.css";

const Empresa = () => {
  return (
    <div>
      <Header />

      <div className="container-empresa">
        <section className="container-txt">
          <h1 className="title-empresa">O que é a Salesforce?</h1>
          <p className="text-empresa">
            A Salesforce é uma empresa de softwares que foca na solução de
            gerenciamento de relacionamento para aproximar empresas e pessoas. É
            uma plataforma de CRM integrada que oferece a todos os departamentos
            uma visão única e compartilhada de cada cliente.
          </p>
        </section>

        <img
          className="doodle-empresa"
          src="https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Einstien.png"
        ></img>
      </div>

      <img
        className="bird-empresa"
        src="https://www.salesforce.com/content/dam/web/en_us/www/images/marketing-cloud/overview/mc-bird.png"
      ></img>

      <div className="container">
        <img
          className="doodle-zebra"
          src="https://www.salesforce.com/blog/wp-content/uploads/sites/2/2023/05/2023-05-360Blog-ContextualDriver-Zig-567x844-1.png"
        ></img>

        <section className="container-txt2">
          <h1 className="title-empresa">O que a Salesforce faz?</h1>
          <p className="text-empresa">
            Juntos, conectamos as empresas aos seus clientes. Utilizando o
            Salesforce Customer 360, nossa plataforma de CRM integrada, sua
            empresa oferece experiências personalizadas para seus clientes.
            Nossa solução fornece produtos poderosos e conectados para melhorar
            seu marketing, vendas, commerce, atendimento ao cliente, TI e muito
            mais.
          </p>
        </section>
      </div>

      <h1 className="title-empresa2">Por que usar Salesforce?</h1>

      <div className="motivos-container">
        <section className="first-container">
          <ul>
            <li className="motivo">
              {" "}
              Atraia mais compradores com uma estratégia de marketing
              personalizada.
            </li>
            <li className="motivo">
              Atenda às expectativas dos seus clientes oferecendo experiências
              incríveis de compra.
            </li>
          </ul>
        </section>

        <section className="middle-container">
          <img
            className="image-motivo"
            src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/fast-app-development-quick-look/harness-the-power-of-the-platform/images/de-DE/cab5babec23775ca15b86d196b9acbe8_8870-d-778-51-e-8-4672-b-81-e-a-98842-f-9-d-594.png"
          ></img>
          <li className="motivo">
            Automatize tarefas demoradas criando aplicativos personalizados.
          </li>
        </section>

        <section className="first-container">
          <ul>
            <li className="motivo">
              Conquiste mais clientes conhecendo suas necessidades e
              preocupações.
            </li>
            <li className="motivo">
              Responda rapidamente aos problemas de suporte ao cliente em
              qualquer canal.
            </li>
          </ul>
        </section>
      </div>

      <h1 className="title-empresa">O que a Salesforce representa?</h1>

      <div className="representacao">
        <p className="representacao-txt">
          Nossos principais valores ajudam a tornar a Salesforce uma plataforma
          para mudanças. Desde que começamos a operar em um pequeno apartamento
          em São Francisco em 1999, acreditamos que fazer o bem como empresa
          significa fazer o bem ao mundo. Por isso, comprometemos nosso tempo,
          equidade e produtos para melhorar a educação, a igualdade e o meio
          ambiente para todos. Os principais valores da Salesforce: Confiança,
          Sucesso do Cliente, Inovação, Igualdade e Sustentabilidade.
        </p>

        <img
          className="representacao-image"
          src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/salesforce-success-cloud-basics/get-started-with-salesforce-success-cloud/images/pt-BR/f10a6e09c21bea91dfe769134f59f5a4_8130-c-8-f-9-00-ca-4-f-28-9972-39236-a-7-e-39-c-8.png"
        ></img>
      </div>

      <div className="last-container">
        <img
          className="doodle-suport"
          src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-salesforce/avatars/Admin_TKjjHxf.png"
        ></img>

        <p className="contact">
          Quer saber mais?
          <br /> Contate-nos 0800 891 1887
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Empresa;
