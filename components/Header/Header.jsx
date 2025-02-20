import './Header.css';
import GitLogo from '../../src/assets/gitlogo.svg';
import Logo from '../../src/assets/logo.svg';
import menuMobileIcon from '../../src/assets/menu-mobile-icon.svg';
import MenuMobile from '../../components/MenuMobile/Menumobile';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);


    function toggleMenu() {
        setIsOpen(!isOpen);
        // console.log(isOpen);
    }

    return (
        <header className='header'>
            <section className='header-container'>
                <div className='left-squere left-square-border'>
                    <img src={GitLogo} alt="ícone se referindo ao github" />
                </div>
                <div className='main-header'>
                    <div className='header-logo'>
                        <img src={Logo} alt="Logo da CodeLab" />
                    </div>
                    <div className='header-links'>
                        <ul>
                            {/* <li><a href="#cases-container">Serviços</a></li> */}
                            {/* <li><a href="#">Blog</a></li> */}
                            {/* <li><a href="#">Cases de sucesso</a></li> */}
                        </ul>
                        <div className='header-button'>
                            {/* <Link to="/contact">Iniciar um projeto</Link> */}
                            <a className="" href="https://wa.me/5522992877496?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações." target='_blank' rel="noopener noreferrer">Iniciar um projeto</a>
                        </div>
                    </div>
                    <button onClick={toggleMenu} className='menu-icon-mobile'>
                            <img src={menuMobileIcon} alt="Ícone do menu mobile" />
                    </button>
                </div>
                <div className='left-squere right-square-border'>
                    <img src={GitLogo} alt="ícone se referindo ao github" />
                </div>
            </section>
            <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />
        </header>
    );

};

export default Header;