import './Contact.css';

const Contact = () => {

    return (
        <section className='contact-container'>
            <div className='contact-informations'>
                <div className='contact-content'>
                    <h1>Contato</h1>
                    <p>Estamos ansiosos para ouvir sua ideia e transformá-la em um projeto incrível. Entre em contato conosco!</p>
                </div>
                <div className='copy-right'>
                    <p>© 2021 CodeLab. Todos os direitos reservados.</p>
                </div>
            </div>
            
                

            <div className="contact-form w-full max-w-2xl mx-auto">
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

