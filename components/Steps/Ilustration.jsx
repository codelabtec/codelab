import './Ilustration.css';
import PropTypes from 'prop-types';

const Ilustration = ({ step }) => {

    return (
        <section className='ilustration-container'>
            {step === 'Discovery' && (
                <div className="discovery-image">
                    {/* Adicione aqui seus elementos SVG ou componentes complexos */}
                    <h1>Ilustração</h1>
                    <div className="animated-element">...</div>
                </div>
            )}
        </section>
    );
};

Ilustration.propTypes = {
    step: PropTypes.string.isRequired,
};

export default Ilustration;