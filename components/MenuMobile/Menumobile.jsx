import './Menumobile.css';
import Logo from '../../src/assets/logo.svg';
import closeIcon from '../../src/assets/close.svg'
import PropTypes from 'prop-types';

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
                    <div className='menu-mobile-links'>
                        <ul>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Cases de sucesso</a></li>
                        </ul>
                    </div>
                    <div className='menu-mobile-button'>
                            <a href="#">Iniciar um projeto</a>
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

