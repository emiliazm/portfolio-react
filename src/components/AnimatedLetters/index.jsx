import './index.scss';
import PropTypes from 'prop-types';

const AnimatedLetters = (props) => {
  const {
    letterClass,
    strArray,
    idx,
  } = props;

  return (
    <span>
      {
        strArray.map((char, i) => (
          <span key={`${i + idx}`} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  );
};

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  idx: PropTypes.number.isRequired,
};

export default AnimatedLetters;
