import './Process.css';
import { useState, useEffect, useRef } from 'react';
import 'animate.css';

const Process = () => {
    const [activeStep, setActiveStep] = useState(0);
    const titleRef = useRef(null);

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

    // Adicionando animação ao título
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__fadeInLeft", "animate__animated");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        if (titleRef.current) observer.observe(titleRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className='process-container'>
            <div className='process-content'>
                <div className='cases-text'>
                    <div className='cases-title'>
                        <span>NOSSO PROCESSO DE TRABALHO</span>
                        <h2 ref={titleRef} className="hidden">
                            Estratégia, design e tecnologia para negócios vencedores.
                        </h2>
                    </div>
                    <div className='cases-text-support'>
                        <span></span>
                        <p>
                            Somos uma agência que transforma ideias em soluções digitais únicas, unindo design criativo, 
                            tecnologia de ponta e estratégia para impulsionar marcas e alcançar resultados extraordinários.
                        </p>
                    </div>
                </div>
                <div className='process-steps-container'>
                    <div className='process-step-text'>
                        {stepsData.map((step, index) => (
                            <div
                                style={activeStep === index ? activeStepStyle : {}}
                                key={index}
                                className='process-step-button'
                                onClick={() => handleStepChange(index)}
                            >
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                        <div className='lottie-animation-container'>
                            <div className='lottie-animation'>
                                <h1>Olá</h1>
                            </div>
                        </div>
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
};

export default Process;
