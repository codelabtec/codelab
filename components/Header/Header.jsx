import './Header.css';
import GitLogo from '../../src/assets/gitlogo.svg';
import Logo from '../../src/assets/logo.svg';
import menuMobileIcon from '../../src/assets/menu-mobile-icon.svg';
import MenuMobile from '../../components/MenuMobile/Menumobile';
import { useState } from 'react';

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
                        <img src={Logo} alt="Logo do github" />
                    </div>
                    <div className='header-links'>
                        <ul>
                            <li><a href="#company-text">Serviços</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Cases de sucesso</a></li>
                        </ul>
                        <div className='header-button'>
                            <a href="#">Iniciar um projeto</a>
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