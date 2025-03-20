import './Contact.css';
import ArrowLeft from '../../src/assets/arrow.svg';
import LogoLight from '../../src/assets/logo-light.svg';
import { Link } from 'react-router-dom';
import ArrowDark from '../../src/assets/arrow-dark.svg';


const Contact = () => {

    const currentYear = new Date().getFullYear();


    return (
        <section className='contact-container'>
            <div className='contact-informations'>
                <div className='contact'>
                <div className='contact-content'>
                    <Link to='/' className='back-home'>
                        <button>
                            <img src={ArrowLeft} alt='voltar para a página inicial'/>
                            Voltar para a home
                        </button>
                    </Link>
                    <img src={LogoLight} alt='Logo CodeLab' />
                </div>
                <div className='contact-text'>
                    <h1>Adorariamos te ajudar a dar vidas as suas ideias.</h1>
                    <p>Estamos ansiosos para ouvir sua ideia e transformá-la em um projeto incrível. Entre em contato conosco!</p>
                </div>
                <div className='contact-info'>
                    <div className='contact-info-item'>
                        <h2>Telefone</h2>
                        <a>(11) 99999-9999</a>
                    </div>
                    <div className='contact-info-item'>
                        <h2>Email</h2>
                        <a>wearecodelabtec@gmail.com</a>
                    </div>
                </div>
                </div>
                <div className='copy-right'>
                    <p>© {currentYear} CodeLab. Todos os direitos reservados.</p>
                </div>
            </div>
            <div className="contact-form w-full max-w-2xl mx-auto">
                 <Link to='/' className='back-home'>
                        <button>
                            <img src={ArrowDark} alt='voltar para a página inicial'/>
                            Voltar para a home
                        </button>
                 </Link>
            <iframe 
                width="540"
                height="305"
                src="https://4adf40de.sibforms.com/serve/MUIFALc9I7ZAV361OVn83Mq0kb8hAYzNqwUroFJfT8Ut9e6WFtOgAXcBNCzr04iMIgOrEs3fL6kN6pJUr3W5fC0HCWGqDnGUXHFxOi3Xmv0vdg7-tg-GTMmF3WEOuDototyUqICsQpEfYNxSzlmY3RBokC0i-eR39O1uqo0vB1nHXt_7w-4qTNaDa3zgbdrXRr4z_pq1ULsxw5Xa"
                className="block mx-auto w-full max-w-[540px]"
                frameBorder="0"
                scrolling="auto"
                allowFullScreen
                title="Formulário Brevo"
            />
            </div>
                
        </section>
    )

};

export default Contact;

