import './Banner.css';
import bannerIcon from '../../src/assets/banner-icon.svg';
import bannerIllustration from '../../src/assets/background-banner.png';
import Vector from '../../src/assets/illustration.svg';
import FacebookLogo from '../../src/assets/facebook-logo.svg';
import InstagramLogo from '../../src/assets/instagram-logo.svg';
import LinkedinLogo from '../../src/assets/linkedin-icon.svg';
// import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <section className="banner-container">
            <div className='banner-content'>
                <div className='left-square'>
                    <div className='left-square-main'>
                        <span></span>
                    </div>
                    <div className='left-square-secondary'>
                        <img src={bannerIcon} alt="Ícone de raio" />
                    </div>
                </div>
                <div className='main-content'>
                    <div className='main-title'>
                        <h1>Designs que fascinam, tecnologias digitais que transformam.</h1>
                        <p>Transformamos ideias em realidade digital através de designs inspiradores e interfaces intuitivas que conectam pessoas e impulsionam negócios.</p>
                        {/* <Link className='button-contact' to="/contact">Iniciar um projeto</Link> */}
                        <a href="https://wa.me/5522992877496?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações." target='_blank' rel="noopener noreferrer">Iniciar um projeto</a>
                        <div className='mobile-background'>
                            <img src={bannerIllustration} alt="Background em gradiente" />
                        </div>
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
                    </div>
                    <div className='illustration'>
                        <div className='vector'>
                            <img src={Vector} alt="Ilustração do banner" />
                        </div>
                        <img src={bannerIllustration} alt="Background em gradiente" />
                    </div>
                   
                </div>
                <div className='right-square'>
                    <div className='right-square-main'>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Banner;