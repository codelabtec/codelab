import './Feedbacks.css';
import Avatar from '../../src/assets/avatar.png';
import Avatar2 from '../../src/assets/avatar2.png';
import Verified from '../../src/assets/verified.svg';
import MilojaLogo from '../../src/assets/miloja-light.svg';
import RioCostaDoSol from '../../src/assets/rio-costa-do-sol.jpg';
const Feedbacks = () => {

    return (
      <section className="feedbacks-container">
        <div className="feedbacks-content">
          <div className="cases-text">
            <div className="cases-title">
              <span>FEEDBACK DE CLIENTES</span>
              <h2>
                Resultados transformadores e sucesso comprovado por nossos
                parceiros.
              </h2>
            </div>
            <div className="cases-text-support">
              <span></span>
              <p>
                Nossos clientes compartilham suas experiências excepcionais
                conosco. Cada depoimento reflete a dedicação e excelência que
                entregamos em cada projeto, demonstrando o impacto real que
                geramos nos negócios de nossos parceiros.
              </p>
            </div>
          </div>
          <div className="feedbacks-cards">
            <div className="cards">
              <p>
                “O resultado ficou 100 vezes melhor do que imaginei. Entregas
                sempre antes do prazo e qualidade garantida!”
              </p>
              <div className="feedbacks-author">
                <div className="feedbacks-author-avatar">
                  <div className="feedbacks-author-image">
                    <img src={Avatar} alt="avatar" />
                  </div>
                  <div className="feedbacks-author-info">
                    <div className="verified">
                      <p>Alessandra Andrade</p>
                      <img src={Verified} alt="verified" />
                    </div>
                    <div>
                      <span>Fundadora e Proprietária</span>
                    </div>
                  </div>
                </div>
                <div className="company-logo">
                  <img src={MilojaLogo} alt="company-logo" />
                </div>
              </div>
            </div>
            <div className="cards">
              <p>
                “Serviço sério e de qualidade. Prazos sempre respeitados e
                entrega completamente fiel ao que eu queria.”
              </p>
              <div className="feedbacks-author">
                <div className="feedbacks-author-avatar">
                  <div className="feedbacks-author-image">
                    <img src={Avatar2} alt="avatar2" />
                  </div>
                  <div className="feedbacks-author-info">
                    <div className="verified">
                      <p>Leonardo Pereira</p>
                      <img src={Verified} alt="verified" />
                    </div>
                    <div>
                      <span>Proprietário</span>
                    </div>
                  </div>
                </div>
                <div className="company-logo">
                  <img src={RioCostaDoSol} alt="company-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

};

export default Feedbacks;