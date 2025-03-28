import './Contact.css';
import ArrowLeft from '../../src/assets/arrow.svg';
import LogoLight from '../../src/assets/logo-light.svg';
import { Link } from 'react-router-dom';
import ArrowDark from '../../src/assets/arrow-dark.svg';
import { Helmet } from 'react-helmet';


const Contact = () => {

    const currentYear = new Date().getFullYear();

    return (
        <section className='contact-container'>

            <Helmet>
                    
                <title>Fale Conosco — CodeLab Tecnologia</title>
                <meta
                    name="description"
                    content="Entre em contato com a equipe da CodeLab Tecnologia. Tire suas dúvidas, solicite orçamentos e conte com nosso suporte especializado."
                />
                <meta
                    name="keywords"
                    content="CodeLab Tecnologia, codelabtec, saas, software, desenvolvimento full-stack, aplicativos, react native, criação de sites, rio de janeiro, apps, app, criar site gratis"
                />
                    <script type="application/ld+json">
                        {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "CodeLab Tecnologia",
                        "url": "https://www.codelabtec.com",
                        "logo": "https://www.codelabtec.com/../../src/assets/logo.svg'",
                        "description": "Agência especializada em desenvolvimento web e mobile, unindo design criativo, tecnologia de ponta e estratégia para impulsionar marcas e gerar resultados mensuráveis para seu negócio.",
                        "sameAs": [
                            "https://www.instagram.com/codelabtec",
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+5522992877496",
                            "contactType": "customer service",
                            "email": "wearecodelab@gmail.com",
                            "availableLanguage": "Portuguese"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Rio de Janeiro",
                            "addressRegion": "RJ",
                            "addressCountry": "BR"
                        },
                        "offers": [
                            {
                            "@type": "Offer",
                            "name": "Desenvolvimento Web",
                            "description": "Criação de sites e sistemas web personalizados"
                            },
                            {
                            "@type": "Offer",
                            "name": "Desenvolvimento Mobile",
                            "description": "Aplicativos para Android e iOS"
                            },
                            {
                            "@type": "Offer",
                            "name": "Design de Interface",
                            "description": "UI/UX design para produtos digitais"
                            }
                        ]
                        })}
                    </script>
            </Helmet>

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

