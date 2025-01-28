import './Cases.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import AzeitonaLogo from '../../src/assets/logo-card.svg';
import Thumbnail from '../../src/assets/thumbnail.png';
// import IllustrationBackground from '../../src/assets/background.svg';

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
                            description='Site e aplicativo de descontos e promoções que revoluciona a forma como os usuários economizam em suas compras diárias. O projeto foi construído com foco em uma experiência do usuário intuitiva e eficiente, implementando uma interface moderna e amigável.'
                            background='#A803A8'
                            tag1='UX Design'
                            tag2='UI Design'
                            thumbnail={Thumbnail}
                            // illustrationBackground={IllustrationBackground}
                        />
                        <ProjectCard 
                            background='#6B7457' 
                        />
                        <ProjectCard 
                            background='#181918'
                        />

                </div>
            </div>
        </section>

    );
    
};

export default Cases;