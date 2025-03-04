import './Cases.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import AzeitonaLogo from '../../src/assets/logo-card.svg';
import Thumbnail from '../../src/assets/thumbnail.png';
import MilojaLogo from '../../src/assets/miloja-logo.svg';
import MilojaThumb from '../../src/assets/miloja-capa.png';
import X10Logo from '../../src/assets/x10-logo.svg';
import X10Thumb from '../../src/assets/x10-capa.png';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'animate.css';

gsap.registerPlugin(ScrollTrigger);

const Cases = () => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth < 530) return;
        if (!containerRef.current || !wrapperRef.current) return;

        const sectionEl = containerRef.current;
        const wrapperEl = wrapperRef.current;
        const baseScrollWidth = wrapperEl.scrollWidth - sectionEl.offsetWidth;
        const extraGap = 150;
        const totalScrollWidth = baseScrollWidth + extraGap;

        if (totalScrollWidth <= 0) return;

        gsap.to(wrapperEl, {
            x: -totalScrollWidth,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: sectionEl,
                start: 'top top',
                end: `+=${baseScrollWidth + 24}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Ativar a animação no scroll
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__slideInDown", "animate__animated");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
    }, []);

    return (
        <section className='cases-container'>
            <div className='cases-content' ref={containerRef}>
                <div ref={titleRef}  className='cases-text hidden'>
                    <div className='cases-title'>
                        <span>NOSSOS CASES</span>
                        <h2>
                            Transformando visões em experiências digitais incríveis.
                        </h2>
                    </div>
                    <div className='cases-text-support'>
                        <span></span>
                        <p>
                            Do conceito à entrega, cada projeto representa nossa expertise em desenvolvimento e design. 
                            Confira nosso portfólio de sites e sistemas que revolucionaram a presença digital de nossos 
                            clientes e superaram expectativas.
                        </p>
                    </div>
                </div>
                <div className='cases-cards'>
                    <div className='horizontal-scroll-wrapper' ref={wrapperRef}>
                        <ProjectCard
                            logo={AzeitonaLogo}
                            description='Site e aplicativo de descontos e promoções que revoluciona a forma como os usuários economizam em suas compras diárias. O projeto foi construído com foco em uma experiência do usuário intuitiva e eficiente, implementando uma interface moderna e amigável.'
                            background='#A803A8'
                            tag1='UX Design'
                            tag2='UI Design'
                            thumbnail={Thumbnail}
                        />
                        <ProjectCard 
                            logo={MilojaLogo}
                            description='Site da loja apresentando acessórios em prata, destacando os principais benefícios dos produtos da marca.'
                            background='#6B7457'
                            tag1='UI Design'
                            tag2='Site'
                            thumbnail={MilojaThumb}
                        />
                        <ProjectCard 
                            logo={X10Logo}
                            description="Plataforma personalizada de apostas esportivas, desenvolvida para atender casas de apostas em crescimento."
                            background='#181918'
                            tag1='UI Design'
                            tag2='UX Design'
                            thumbnail={X10Thumb}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cases;
