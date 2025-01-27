import PropTypes from 'prop-types';
import './ProjectCard.css'


const ProjectCard = ({
    logo,
    title,
    description,
    tag1,
    tag2,
    background = "#f7f7f7",
    thumbnail,
}) => {

    const styles = {
        backgroundColor: background,
    }

    return (
        <div className='card' style={styles}>
            <div className='card-texts-container'>
               <div className='card-text-content'>
                    {logo && <img src={logo} alt="Logo do projeto" />}
                    <h3>{title}</h3>
                    <p>{description}</p>
               </div>
               <div className='card-tags'>
                    <span>{tag1}</span>
                    <span>{tag2}</span>
               </div>
            </div>
            <div className='project-thumbnail'>
                {thumbnail && <img src={thumbnail} alt="Imagem do projeto" />}
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    logo: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    background: PropTypes.string,
    tag1: PropTypes.string,
    tag2: PropTypes.string,
    thumbnail: PropTypes.string,
};


export default ProjectCard;

