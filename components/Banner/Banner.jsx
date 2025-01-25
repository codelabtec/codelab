import './Banner.css';
import bannerIcon from '../../src/assets/banner-icon.svg';
import bannerIllustration from '../../src/assets/background-banner.png';
import Vector from '../../src/assets/illustration.svg';
import FacebookLogo from '../../src/assets/facebook-logo.svg';
import InstagramLogo from '../../src/assets/instagram-logo.svg';
import LinkedinLogo from '../../src/assets/linkedin-icon.svg';

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
                        <a href="#">Iniciar um projeto</a>

                        <div className='mobile-background'>
                            <img src={bannerIllustration} alt="Background em gradiente" />
                        </div>
                        <div className='social-media-links'>
                                <div className='icons'>
                                    <img src={FacebookLogo} alt="Logo do facebook" />
                                    <a href="#">Facebook</a>
                                </div>
                                <div className='icons'>
                                    <img src={InstagramLogo} alt="Logo do facebook" />
                                    <a href="#">Instagram</a>
                                </div>
                                <div className='icons linkedin-icon'>
                                    <img src={LinkedinLogo} alt="Logo do facebook" />
                                    <a href="#">Linkedin</a>
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