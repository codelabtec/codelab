import './Newsletter.css';
import { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/subscribe',
            { email },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );
            setStatus(response.data.message);
            setEmail('');
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Erro ao realizar inscrição!';
            const brevoMessage = error.response?.data?.error?.message;
            setStatus(`Erro: ${errorMessage || brevoMessage || 'Falha na conexão'}`);
        }
    };

    return (

        <form onSubmit={handleSubmit}>
        <section className='newsletter-container'>
            <div className='newsletter-content'>
                <div className='newsletter-text'>
                    <h2>Receba novidades por e-mail</h2>
                    <p>Esteja por dentro novos artigos, anúncios, e estudos de caso.</p>
                </div>
                <div className='newsletter-form'>
                    <input 
                    type='email' 
                    value={email} 
                    placeholder='Digite seu e-mail' 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    
                    <button type='submit'>Inscreva-se</button>
                    {status && <p>{status}</p>}
                </div>
            </div>

        </section>
        </form>
    );

};

export default Newsletter;