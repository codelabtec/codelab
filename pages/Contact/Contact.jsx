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
                    width="600"
                    height="505"
                    src="https://4adf40de.sibforms.com/serve/MUIFAI4Cj2LqYtBqYFZATXW-t_j9CGLNvej3bxspRWbj1HqJ4xmWzjhwJ41qwBy_jFz6YTauJNX_FbnUuu7mOiqhGFR-b7AxDnMWqC_5UmjW9ZO_bsBWNh9Nw0yovOXe5f80op7v2h8HePPUtYJUZs5fUjxp2lbb6oB5S26wqBPexQXbZl39h_4W1dc9EWJmtL_f4kB8ehLylQ8M"
                    className="block mx-auto w-full max-w-[600px]"
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

