import './About.css';
import Check from '../../src/assets/check.svg';
// import Video from '../../src/assets/Scene.mp4';
// import LottieVideo from '../../src/assets/projects.json';
import VideoProject from '../../src/assets/projects.mp4';
import { useEffect, useRef } from 'react';
// import Lottie from 'lottie-react';
import 'animate.css';

const About = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__bounceInUp", "animate__animated");
                    observer.unobserve(entry.target); // Evita reativação da animação ao rolar para cima
                }
            });
        }, { threshold: 0.3 }); // Ativa quando 30% do título estiver visível

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className='company-container'>
            <div className='company-content'>
                <div className='company-text'>
                    <span>Sobre a CodeLab</span>
                    <h2 ref={titleRef} className="hidden">
                        Estratégia, design e tecnologia para negócios vencedores.
                    </h2>
                    <p>Somos uma agência que transforma ideias em soluções digitais únicas, unindo design criativo, tecnologia de ponta e estratégia para impulsionar marcas e alcançar resultados extraordinários.</p>

                    <div className='company-values'>
                        <div className='first-column-value'>
                            <ul>
                                <li><img src={Check} alt="Ícone de check" /><p>Aplicações Web</p></li>
                                <li><img src={Check} alt="Ícone de check" /><p>E-commerce</p></li>
                                <li><img src={Check} alt="Ícone de check" /><p>Websites</p></li>
                                <li><img src={Check} alt="Ícone de check" /><p>Landing Pages</p></li>
                            </ul>
                        </div>
                        <div className='first-column-value'>
                            <ul>
                                <li><img src={Check} alt="Ícone de check" /><p>SEO</p></li>
                                <li><img src={Check} alt="Ícone de check" /><p>Manutenção de sites</p></li>
                                <li><img src={Check} alt="Ícone de check" /><p>Aplicativos mobile</p></li>
                                <li><img src={Check} alt="Ícone de check" /><p>Consultoria em UX Design</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="institutional-video">
                    <div className="video">
                        {/* <video 
                            src={Video} 
                            title="Apresentacao" 
                            alt="Gif institucional" 
                            loop 
                            autoPlay 
                            muted 
                            playsInline
                        /> */}
                        <video

                        src={VideoProject}
                        title="Apresentacao"
                        alt="Gif institucional"
                        loop
                        autoPlay
                        muted
                        />

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
