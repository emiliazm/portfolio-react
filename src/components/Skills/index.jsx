import './index.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3, faHtml5, faJsSquare, faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import Ror from '../../assets/images/ror.svg';
import Ruby from '../../assets/images/ruby.svg';
import AnimatedLetters from '../AnimatedLetters';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 4000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1 className="title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Skills'.split('')}
              idx={15}
            />
          </h1>
          <p>
            <span className="font-color">Front-end:</span>
            {' '}
            HTML, CSS, JavaScript, React, Redux.
          </p>
          <p>
            <span className="font-color">Back-end:</span>
            {' '}
            Ruby on Rails, PostgreSQL.
          </p>
          <p>
            <span className="font-color">Frameworks:</span>
            {' '}
            Rspect, Jest, Bootstrap, Capibara, Swagger.
          </p>
          <p>
            <span className="font-color">Tools:</span>
            {' '}
            Git, GitHub, Heroku, Netlify, VS Code, Webpack,
            Babel, ESLint, Stylelint, Rubocop.
          </p>
          <p>
            <span className="font-color">Methods:</span>
            {' '}
            TDD, OOP, MVC.
          </p>
          <p>
            <span className="font-color">Professional skills:</span>
            {' '}
            Teamwork, Time and Project management,
            Adaptability, Communication, Creativity, Pair-programming.
          </p>
          <p>
            <span className="font-color">Languages:</span>
            {' '}
            English, Spanish.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <img src={Ruby} width={100} alt="Ruby on Rails" color="red" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face6">
              <img src={Ror} width={100} alt="Ruby on Rails" color="red" />
            </div>
          </div>

        </div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Skills;
