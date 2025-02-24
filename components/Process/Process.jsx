import './Process.css';
import { useState } from 'react';

const Process = () => {
    
    const [activeStep, setActiveStep] = useState(0);

    const stepsData = [
        {
          title: 'Discovery',
          description: 'Pesquisamos e analisamos todos os requisitos do projeto, garantindo um entendimento completo das necessidades.',
          animationContent: 'Animação de Discovery',
        },
        {
          title: 'Design',
          description: 'Web Design Agency Lorem Ipsum 2',
          animationContent: 'Animação de Design',
        },
        {
          title: 'Development',
          description: 'Web Design Agency Lorem Ipsum 3',
          animationContent: 'Animação de Development',
        },
        {
          title: 'Delivery',
          description: 'Web Design Agency Lorem Ipsum 4',
          animationContent: 'Animação de Delivery',
        },
      ];

      
    const activeStepStyle = {
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.30)',
    };

      const handleStepChange = (index) => {
        setActiveStep(index);
        console.log('Mudou para o passo', index);
      };

    return (

    <section className='process-container'>
        <div className='process-content'>
            <div className='cases-text'>
                <div className='cases-title'>
                    <span>NOSSO PROCESSO DE TRABALHO</span>
                    <h2>Estratégia,design e tecnologia para negócios vencedores.</h2>
                </div>
                <div className='cases-text-support'>
                    <span></span>
                    <p>Somos uma agência que transforma ideias em soluções digitais únicas, unindo design criativo, tecnologia de ponta e estratégia para impulsionar marcas e alcançar resultados extraordinários.</p>
                </div>
            </div>
            <div className='process-steps-container'>
                <div className='process-step-text'>
                    {stepsData.map((step, index) => (

                    <div
                        style={ activeStep === index ? activeStepStyle : {} }
                        key={index} 
                        className='process-step-button'
                        onClick={() => handleStepChange(index)}>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>

                    ))}
                    <div className='lottie-animation-container'>
                            <div className='lottie-animation'>
                                <h1>Olá</h1>
                            </div>
                    </div>
                    {/* <div className='process-step-button'>
                        <h3>Discovery</h3>
                        <p>Web Design AgencyWeb Design AgencyWeb Design AgencyWeb Design AgencyWeb Design.</p>
                    </div>
                    <div className='process-step-button'>
                        <h3>Discovery</h3>
                        <p>Web Design AgencyWeb Design AgencyWeb Design AgencyWeb Design AgencyWeb Design.</p>
                    </div>
                    <div className='process-step-button'>
                        <h3>Discovery</h3>
                        <p>Web Design AgencyWeb Design AgencyWeb Design AgencyWeb Design AgencyWeb Design.</p>
                    </div> */}
                </div>
                <div className='lottie-animation-container'>
                    <div className='lottie-animation'>
                        <h1>Olá</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
            
    );
}

export default Process;