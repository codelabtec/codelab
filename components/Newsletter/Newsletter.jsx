import './Newsletter.css';
import { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import {CircularProgress } from '@mui/material';

const Newsletter = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('https://codelabbackend-g2nh.onrender.com/api/subscribe',
            { email },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );

            enqueueSnackbar('Inscrição realizada com sucesso!', 
                { variant: 'success',
            });

            setStatus(response.data.message);

            setEmail('');

        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Erro ao realizar inscrição!';
            const brevoMessage = error.response?.data?.error?.message;
            setStatus(`Erro: ${errorMessage || brevoMessage || 'Falha na comunição com a Brevo'}`);
            
            

            enqueueSnackbar(status, 
                { variant: 'error',
            });   

        } finally {
            setLoading(false);
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
                    
                    <button disabled={loading}
                    >
                        {loading ? (
                        <CircularProgress size={24} color='white' />
                        ) : (
                        'Cadastrar'
                        )}</button>
                </div>
            </div>

        </section>
        </form>
    );

};

export default Newsletter;