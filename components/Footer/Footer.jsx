import './Footer.css';
import LogoDark from '../../src/assets/codelab.dark.svg';
import FacebookLogoDark from '../../src/assets/facebook-dark.svg';
import InstagramLogoDark from '../../src/assets/instagram-dark.svg';
import LinkedinLogoDark from '../../src/assets/linkedin-dark.svg';
import { Link } from 'react-router-dom';

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
                            <a target='_blank' rel='noopener noreferrer' href="https://wa.me/5522992877496">(22) 99287-7496</a>
                        </div>
                        <div className='link'>
                            <p>E-mail</p>
                            <a target='_blank' rel='noopener noreferrer' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLrbHPwGkcHwVMnwCtFHGFHRJdVgJxNDVWxWNvZXKXWkdxxtRHPPnpVcwFRtQCBgrlvqbb">wearecodelab@gmail.com</a>
                        </div>
                        <div className='link'>
                            <p>Orçamento</p>
                            <Link to='/contato'>
                                <a href="https://wa.me/5522992877496?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações.">Iniciar um projeto</a>
                            </Link>
                        </div>
                        <div className='link'>
                            <p>Legal</p>
                            <a target='_blank' rel='noopener noreferrer' href='#'>Informações legais</a>
                        </div>
                    </div>
                </div>
                <div className='footer-social'>
                    <p>© {currentYear} CodeLab. Todos os direitos reservados.</p>
                    <div className='social-media-footer'>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/'>
                            <img src={FacebookLogoDark} alt="logo do facebook" />
                        </a>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/codelabtec/'>
                            <img src={InstagramLogoDark} alt="logo do instagram" />
                        </a>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/'>
                            <img src={LinkedinLogoDark} alt="logo do linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );

};

export default Footer;