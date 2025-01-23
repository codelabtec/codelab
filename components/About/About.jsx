import './About.css';

const About = () => {
    
    return (

        <section className='company-container'>
            <div className='company-content'>
                <div className='company-text'>
                    <span>Sobre a CodeLab</span>
                    <h2>Estratégia, design e tecnologia para negócios vencedores.</h2>
                    <p>Somos uma agência que transforma ideias em soluções digitais únicas, unindo design criativo, tecnologia de ponta e estratégia para impulsionar marcas e alcançar resultados extraordinários.</p>

                    <div className='company-values'>

                    </div>

                </div>
                <div className='institutional-video'>
                    <span>Vídeo de Apresentacao</span>
                    <div className='video'>
                        <iframe src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default About;