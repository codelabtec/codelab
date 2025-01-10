import './Header.css';
import GitLogo from '../../src/assets/gitlogo.svg';
import Logo from '../../src/assets/logo.svg';
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
                            <li>Serviços</li>
                            <li>Blog</li>
                            <li>Cases de sucesso</li>
                        </ul>
                        <a href="#">Iniciar um projeto</a>
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