import './Newsletter.css';

const Newsletter = () => {

    return (

        <section className='newsletter-container'>
            <div className='newsletter-content'>
                <div className='newsletter-text'>
                    <h2>Receba novidades por e-mail</h2>
                    <p>Esteja por dentro novos artigos, anúncios, e estudos de caso.</p>
                </div>
                <div className='newsletter-form'>
                    <input type='email' placeholder='Digite seu e-mail' />
                    <button>Inscreva-se</button>
                </div>
            </div>

        </section>
    );

};

export default Newsletter;