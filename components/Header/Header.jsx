import './Header.css';
import GitLogo from '../../src/assets/gitlogo.svg';
import Logo from '../../src/assets/logo.svg';
import menuMobileIcon from '../../src/assets/menu-mobile-icon.svg';
const Header = () => {


    return (
        <header className='header'>
            <section className='header-container'>
                <div className='left-squere'>
                    <img src={GitLogo} alt="ícone se referindo ao github" />
                </div>
                <div className='main-header'>
                    <div className='header-logo'>
                        <img src={Logo} alt="Logo do github" />
                    </div>
                    <div className='header-links'>
                        <ul>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Cases de sucesso</a></li>
                        </ul>
                        <div className='header-button'>
                            <a href="#">Iniciar um projeto</a>
                        </div>
                    </div>
                    <div className='menu-icon-mobile'>
                        <img src={menuMobileIcon} alt="Ícone do menu mobile" />
                    </div>
                </div>
                <div className='left-squere'>
                    <img src={GitLogo} alt="ícone se referindo ao github" />
                </div>
            </section>
        </header>
    );

};

export default Header;