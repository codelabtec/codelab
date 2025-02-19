import './About.css';
import Check from '../../src/assets/check.svg';
import Gif from '../../src/assets/SceneReduzida.gif';

const About = () => {
    
    return (

        <section className='company-container'>
            <div className='company-content'>
                <div className='company-text'>
                    <span>Sobre a CodeLab</span>
                    <h2>Estratégia, design e tecnologia para negócios vencedores.</h2>
                    <p>Somos uma agência que transforma ideias em soluções digitais únicas, unindo design criativo, tecnologia de ponta e estratégia para impulsionar marcas e alcançar resultados extraordinários.</p>

                    <div className='company-values'>
                        <div className='first-column-value'>
                            <ul>
                                <li>
                                    <img src={Check} alt="Ícone de check do" />
                                    <p>Aplicações Web</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone de check do" />
                                    <p>E-commerce</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone de check do" />
                                    <p>Websites</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone de check do" />
                                    <p>Landing Pages</p>
                                </li>
                            </ul>
                        </div>
                        <div className='first-column-value'>
                            <ul>
                                <li>
                                    <img src={Check} alt="Ícone de check do" />
                                    <p>SEO</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone de check do" />
                                    <p>Manutenção de sites</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone de check do" />
                                    <p>Aplicativos mobile</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone de check do" />
                                    <p>Consultoria em UX Design</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='institutional-video'>
                    <span>Vídeo de Apresentacao</span>
                    <div className='video'>
                        <img src={Gif} title="Apresentacao" alt='Gif institucional'></img>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default About;