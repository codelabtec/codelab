import './Process.css';
import { useState, useEffect, useRef } from 'react';
import ImageOne from '../../src/assets/1.png';
import ImageTwo from '../../src/assets/2.png';
import ImageThree from '../../src/assets/3.png';
import ImageFour from '../../src/assets/4.png';
import 'animate.css';

const Process = () => {

    const [activeStep, setActiveStep] = useState(0);
    const titleRef = useRef(null);

    const stepsData = [
        {
            title: 'Discovery',
            description: 'Pesquisamos e analisamos todos os requisitos do projeto, garantindo um entendimento completo das necessidades.',
            animationContent: 'Animação de Discovery',
            image: ImageOne,
        },
        {
            title: 'Design',
            description: 'Web Design Agency Lorem Ipsum 2',
            animationContent: 'Animação de Design',
            image: ImageTwo,
        },
        {
            title: 'Development',
            description: 'Web Design Agency Lorem Ipsum 3',
            animationContent: 'Animação de Development',
            image: ImageThree,
        },
        {
            title: 'Delivery',
            description: 'Web Design Agency Lorem Ipsum 4',
            animationContent: 'Animação de Delivery',
            image: ImageFour,
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
                    entry.target.classList.add("animate__fadeInDown", "animate__animated");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (titleRef.current) observer.observe(titleRef.current);

        return () => observer.disconnect();
    }, []);     

    return (
        <section className='process-container'>
            <div className='process-content'>
                <div ref={titleRef} className='cases-text hidden'>
                    <div className='cases-title'>
                        <span>NOSSO PROCESSO DE TRABALHO</span>
                        <h2>
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
                    </div>
                    <div className='lottie-animation-container'>
                        <div className='lottie-animation'>
                            <img 
                                src={stepsData[activeStep].image} 
                                alt={stepsData[activeStep].title} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
