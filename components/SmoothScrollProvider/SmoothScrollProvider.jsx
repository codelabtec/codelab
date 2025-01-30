// src/components/SmoothScrollProvider.jsx
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import PropTypes from 'prop-types';

const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Inicializa o Lenis
    lenisRef.current = new Lenis({
      duration: 1.9, // Duração da animação de scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Função de easing
      direction: 'vertical', // Direção do scroll ('vertical' ou 'horizontal')
      gestureDirection: 'vertical', // Direção do gesto de scroll
      smooth: true, // Habilita o smooth scroll
      smoothTouch: false, // Habilita o smooth scroll em dispositivos touch
      touchMultiplier: 2, // Multiplicador para gestos touch
      // Outras opções conforme a documentação
    });

    // Função de atualização do Lenis
    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Limpeza ao desmontar o componente
    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return (
    <div data-lenis-container>
      {children}
    </div>
  );
};

SmoothScrollProvider.propTypes = {
    children: PropTypes.string,
};

export default SmoothScrollProvider;
