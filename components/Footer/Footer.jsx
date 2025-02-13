import './Footer.css';
import LogoDark from '../../src/assets/codelab.dark.svg';
import FacebookLogoDark from '../../src/assets/facebook-dark.svg';
import InstagramLogoDark from '../../src/assets/instagram-dark.svg';
import LinkedinLogoDark from '../../src/assets/linkedin-dark.svg';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className='footer-content'>
                <div className='footer-sitemap'>
                    <div className='footer-logo'>
                        <img src={LogoDark} alt='Logo do footer' />
                        <p>Designs que fascinam, tecnologias digitais que transformam.</p>
                    </div>
                    <div className='footer-links'>
                        <div className='link'>
                            <p>Contato</p>
                            <a href='#'>(22) 99287-7496</a>
                        </div>
                        <div className='link'>
                            <p>E-mail</p>
                            <a href='#'>wearecodelab@gmail.com</a>
                        </div>
                        <div className='link'>
                            <p>Orçamento</p>
                            <a href=''>Iniciar um projeto</a>
                        </div>
                        <div className='link'>
                            <p>Legal</p>
                            <a href='#'>Informações legais</a>
                        </div>
                    </div>
                </div>
                <div className='footer-social'>
                    <p>© {currentYear} CodeLab. Todos os direitos reservados.</p>
                    <div className='social-media-footer'>
                        <a href='#'>
                            <img src={FacebookLogoDark} alt="logo do facebook" />
                        </a>
                        <a href='#'>
                            <img src={InstagramLogoDark} alt="logo do instagram" />
                        </a>
                        <a href='#'>
                            <img src={LinkedinLogoDark} alt="logo do linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );

};

export default Footer;