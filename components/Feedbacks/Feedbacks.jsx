import './Feedbacks.css';
import Avatar from '../../src/assets/avatar.png';
import Verified from '../../src/assets/verified.svg';
import MilojaLogo from '../../src/assets/miloja-light.svg';

const Feedbacks = () => {

    return (
        <section className='feedbacks-container'>
            <div className='feedbacks-content'>
                <div className='cases-text'>
                        <div className='cases-title'>
                            <span>FEEDBACK DE CLIENTES</span>
                            <h2>Estratégia, design e tecnologia para negócios vencedores.</h2>
                        </div>
                        <div className='cases-text-support'>
                            <span></span>
                            <p>Somos uma agência que transforma ideias em soluções digitais únicas, unindo design criativo, tecnologia de ponta e estratégia para impulsionar marcas e alcançar resultados extraordinários.</p>
                        </div>
                    </div>
                <div className='feedbacks-cards'>
                    <div className='cards'>
                        <p>“We’ve been using Untitled to kick start every new project and can’t imagine working without it.”</p>
                        <div className='feedbacks-author'>
                                <div className='feedbacks-author-avatar'>
                                    <div className='feedbacks-author-image'>
                                        <img src={Avatar} alt="avatar" />
                                    </div>
                                    <div className='feedbacks-author-info'>
                                        <div className='verified'>
                                            <p>Alessandra Magalhaes</p>
                                            <img src={Verified} alt="verified" />
                                        </div>
                                        <div>
                                            <span>Fundadora e Proprietária</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='company-logo'>
                                    <img src={MilojaLogo} alt="company-logo" />
                                </div>
                        </div>
                    </div>
                    <div className='cards'>
                        <p>“We’ve been using Untitled to kick start every new project and can’t imagine working without it.”</p>
                        <div className='feedbacks-author'>
                                <div className='feedbacks-author-avatar'>
                                    <div className='feedbacks-author-image'>
                                        <img src={Avatar} alt="avatar" />
                                    </div>
                                    <div className='feedbacks-author-info'>
                                        <div className='verified'>
                                            <p>Alessandra Magalhaes</p>
                                            <img src={Verified} alt="verified" />
                                        </div>
                                        <div>
                                            <span>Fundadora e Proprietária</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='company-logo'>
                                    <img src={MilojaLogo} alt="company-logo" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Feedbacks;