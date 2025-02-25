import { useEffect } from "react";
import './Banner.css';
import bannerIcon from '../../src/assets/banner-icon.svg';
import bannerIllustration from '../../src/assets/background-banner.png';
import Vector from '../../src/assets/illustration.svg';
import FacebookLogo from '../../src/assets/facebook-logo.svg';
import InstagramLogo from '../../src/assets/instagram-logo.svg';
import LinkedinLogo from '../../src/assets/linkedin-icon.svg';
import { Link } from "react-router-dom";
import 'animate.css';

const Banner = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Remove a observação após ativar
                }
            });
        }, { threshold: 0.3 }); // Ativa quando 30% do elemento estiver visível

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }, []);

    return (
        <section className="banner-container">
            <div className='banner-content'>
                <div className='left-square'>
                    <div className='left-square-main'><span></span></div>
                    <div className='left-square-secondary'>
                        <img src={bannerIcon} alt="Ícone de raio" />
                    </div>
                </div>
                <div className='main-content'>
                    <div className='main-title'>
                        <h1 className="animate-on-scroll hidden animate__animated animate__flipInX">
                            Designs que fascinam, tecnologias digitais que transformam.
                        </h1>
                        <p className="animate-on-scroll hidden animate__animated animate__backInUp">
                            Transformamos ideias em realidade digital através de designs inspiradores e interfaces intuitivas que conectam pessoas e impulsionam negócios.
                        </p>
                        <div>
                            <Link 
                                to="/contact" 
                                className="button-contact">
                                Iniciar um projeto
                            </Link>
                        </div>

                        {/* Modal com o formulário Brevo */}
                        {/* {modalOpen && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <button className="close-button" >✖</button>
                                <iframe 
                                    src="https://4adf40de.sibforms.com/serve/MUIFAFRYnQEvC1lEBiBwQbnfuh-3jVh7u6E8F3xLjDYh1LVFEW0I9NMmZZIoFPitlpfOkcxdZc3ykvH0FREGzCrnfF_QqDdx5UZii2v2fexzNQRinaq-iPqiFvZ2qnZ4N6kHVqh0bmA1nnH9OVzv6MAqaNBaEk8bc_OuQvWINi6zD_BVUiFK5O_ZN5s5zEB7jM8w6HSebSWQ5bqd" 
                                    frameBorder="0" 
                                    scrolling="auto" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                        )} */}
                        
                        <div className='social-media-links'>
                            <div className='icons'>
                                <img src={FacebookLogo} alt="Logo do facebook" />
                                <a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'>Facebook</a>
                            </div>
                            <div className='icons'>
                                <img src={InstagramLogo} alt="Logo do instagram" />
                                <a href="https://www.instagram.com/codelabtec/" target='_blank' rel='noopener noreferrer'>Instagram</a>
                            </div>
                            <div className='icons linkedin-icon'>
                                <img src={LinkedinLogo} alt="Logo do linkedin" />
                                <a href="https://www.linkedin.com/" target='_blank' rel='noopener noreferrer'>Linkedin</a>
                            </div>
                        </div>
                        <div className='mobile-background'>
                            <img src={bannerIllustration} alt="Background em gradiente" />
                        </div>
                    </div>
                    <div className='illustration'>
                        <div className='vector'>
                            <img src={Vector} alt="Ilustração do banner" />
                        </div>
                        <img src={bannerIllustration} alt="Background em gradiente" />
                    </div>
                </div>
                <div className='right-square'>
                    <div className='right-square-main'></div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
