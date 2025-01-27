import './Cases.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import AzeitonaLogo from '../../src/assets/logo-card.svg';
import Thumbnail from '../../src/assets/thumbnail.png';

const Cases = () => {

    return (

        <section className='cases-container'>
            <div className='cases-content'>
                <div className='cases-text'>
                    <div className='cases-title'>
                        <span>NOSSOS CASES</span>
                        <h2>Estratégia, design e tecnologia para negócios vencedores.</h2>
                    </div>
                    <div className='cases-text-support'>
                        <span></span>
                        <p>Somos uma agência que transforma ideias em soluções digitais únicas, unindo design criativo, tecnologia de ponta e estratégia para impulsionar marcas e alcançar resultados extraordinários.</p>
                    </div>
                </div>
                <div className='cases-cards'>
                        <ProjectCard
                            logo={AzeitonaLogo}
                            title='Nome do segundo projeto'
                            description='Site e aplicativo.'
                            background='#A803A8'
                            tag1='UX Design'
                            tag2='UI Design'
                            thumbnail={Thumbnail}
                        />
                        <ProjectCard />

                </div>
            </div>
        </section>

    );
    
};

export default Cases;