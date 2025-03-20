import './Menumobile.css';
import Logo from '../../src/assets/logo.svg';
import closeIcon from '../../src/assets/close.svg'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 
const MenuMobile = ({isOpen, toggleMenu}) => {

        return (
            <section className={`menu-mobile ${isOpen ? 'open' : ''}`}>
                <div className='menu-mobile-container'>
                    <div className='menu-mobile-logo'>
                        <img src={Logo} alt="Logo do github" />
                        <button className="close-menu-mobile" onClick={toggleMenu}>
                            <img src={closeIcon} alt="Ícone de fechar o menu" />
                        </button>
                    </div>
                    {/* <div className='menu-mobile-links'>
                        <ul>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Cases de sucesso</a></li>
                        </ul>
                    </div> */}
                    <div className='menu-mobile-button'>
                        <p>Nos envie todos os detalhes sobre o seu projeto e retornaremos o mais rápido possível com uma proposta.</p>
                        <Link
                            className='button-contact' 
                            to='/contato'>
                            <button>Iniciar um projeto</button>
                        </Link>
                    </div>
                    <div className='menu-mobile-site-map'>
                        <div id='contato' className='site'>
                            <p>Contato</p>
                            <span>(21) 99287-7496</span>
                        </div>
                        <div className='site'>
                            <p>E-mail</p>
                            <span>wearecodelab@gmail.com</span>
                        </div>
                        <div className='site'>
                            <p>Orçamento</p>
                            <a href="https://wa.me/5522992877496?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações." target='_blank' rel="noopener noreferrer">Iniciar um projeto</a>
                        </div>
                        <div className='site'>
                            <p>Legal</p>
                            <a href="#" target='_blank' rel="noopener noreferrer">Informaões legais</a>
                        </div>
                    </div>
                </div>
            </section>
        );

};

export default MenuMobile;

MenuMobile.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

