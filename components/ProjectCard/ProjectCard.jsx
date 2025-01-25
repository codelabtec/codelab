import PropTypes from 'prop-types';
import './ProjectCard.css'


const ProjectCard = ({
    logo,
    title,
    description,
    background = "#f7f7f7",
}) => {

    const styles = {
        backgroundColor: background,
    }

    return (
        <div className='card' style={styles}>
            <div className='card-texts'>
                {logo && <img src={logo} alt="Logo do projeto" />}
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    logo: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    background: PropTypes.string,
};


export default ProjectCard;

