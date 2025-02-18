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

gsap.registerPlugin(ScrollTrigger);

const Cases = () => {

    // Referência para a <section> que será pinada
  const containerRef = useRef(null);
  // Referência para o wrapper que contém os cards
  const wrapperRef = useRef(null);

  useEffect(() => {

    // Se a tela for menor que 535px, não ativa o scroll horizontal do GSAP.
    if (window.innerWidth < 530) {
        return; 
    }

    // Evita erro caso refs não existam (renderizações rápidas)
    if (!containerRef.current || !wrapperRef.current) return;

    // Quando o componente monta, configuramos a animação
    const sectionEl = containerRef.current;
    const wrapperEl = wrapperRef.current;

    // Calcular a largura total
    const baseScrollWidth = wrapperEl.scrollWidth - sectionEl.offsetWidth;

     // Adicionar manualmente ~24px se tiver gap de 1.5rem:
    const extraGap = 150; 
    const totalScrollWidth = baseScrollWidth + extraGap;

    if (totalScrollWidth <= 0) return;

    // Cria a animação horizontal
    gsap.to(wrapperEl, {
      x: -totalScrollWidth, // move o wrapper para esquerda até o fim
      ease: 'power1.out',
      scrollTrigger: {
        trigger: sectionEl,     // Elemento que "dispara" a animação
        start: 'top top',       // Quando a <section> encostar no topo da tela
        end: `+=${baseScrollWidth + 24}`, // o fim do scroll se estende pela largura total
        scrub: 1,               // A animação acompanha o scroll ("arrastada")
        pin: true,              // "Gruda" a seção enquanto rola horizontalmente
        invalidateOnRefresh: true, // Recalcula tudo em caso de resize
        // markers: true, // Ative para debug se quiser ver os marcadores
      }
    });

    // Cleanup ao desmontar (remove animação e listeners)
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

    return (

        <section className='cases-container' >
            <div className='cases-content' ref={containerRef}>
                <div className='cases-text'>
                    <div className='cases-title'>
                        <span>NOSSOS CASES</span>
                        <h2>Transformando visões em experiências digitais incríveis.</h2>
                    </div>
                    <div className='cases-text-support'>
                        <span></span>
                        <p>Do conceito à entrega, cada projeto representa nossa expertise em desenvolvimento e design. Confira nosso portfólio de sites e sistemas que revolucionaram a presença digital de nossos clientes e superaram expectativas.</p>
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
                                // illustrationBackground={IllustrationBackground}
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