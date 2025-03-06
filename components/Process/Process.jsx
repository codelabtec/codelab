import './Process.css';
import { useState, useEffect, useRef } from 'react';
import ImageOne from '../../src/assets/discovery.svg';
import ImageTwo from '../../src/assets/1.svg';
import ImageThree from '../../src/assets/2.svg';
import ImageFour from '../../src/assets/3.svg';
// import Ilustration from '../../components/Steps/Ilustration.jsx';
import 'animate.css';

const Process = () => {

    const [activeStep, setActiveStep] = useState(0);
    const titleRef = useRef(null);

    const stepsData = [
        {
            title: 'Descoberta',
            description: 'Identifica necessidades dos usuários. Coleta dados para decisões de design.',
            animationContent: 'Animação de Discovery',
            image: ImageOne,
        },
        {
            title: 'Ideação',
            description: 'Propõe múltiplas soluções para problemas. Usa técnicas colaborativas para expandir possibilidades.',
            animationContent: 'Animação de Design',
            image: ImageTwo,
        },
        {
            title: 'Prototipação',
            description: 'Cria modelos testáveis. Valida conceitos com usuários reais.',
            animationContent: 'Animação de Development',
            image: ImageThree,
        },
        {
            title: 'Desenvolvimento',
            description: 'Converte protótipos em código. Implementa interfaces funcionais.',
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
                                className='lottie-animation-image'
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
