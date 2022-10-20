import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Photo1 from '../../assets/images/photo1.jpg';
import Photo2 from '../../assets/images/photo2.jpg';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 4000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I am a
            {' '}
            <span className="font-color">Full-stack web developer</span>
            {' '}
            with a love for clean code and design. Fluent in multiple
            languages, frameworks, and technologies, and capable of ramping up 
            quickly and efficiently.
          </p>
          <p>
            I am familiar with the class of fast-paced, intense environment that development jobs
            require due to my previous experience working as an
            {' '}
            <span className="font-color">
              Architect
            </span>
            {' '}
            and a
            {' '}
            <span className="font-color">Pilot</span>
            {' '}
            for the last ten years.
            These also taught me discipline and gifted me the ability to work in a team,
            learn to be patient,
            listen to others, and adapt to situations that constantly change.
          </p>
          <p>
            I would describe myself as a hard-working and driven individual who is not
            afraid to face a challenge and is passionate about everything she does.
          </p>
        </div>
        <div className="photo-container">
          <img className="photo1" src={Photo1} alt="photo1" />
          <img className="photo2" src={Photo2} alt="photo2" />
        </div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default About;
