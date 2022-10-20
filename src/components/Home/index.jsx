import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import LogoTitle from '../../assets/images/logo-e.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = 'milia'.split('');
  const jobArray = 'Zambrano.'.split('');

  useEffect(() => {
    const timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 4000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>
              &apos;m
            </span>
            <img src={LogoTitle} alt="developer" />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />

          </h1>
          <h2>Full-stack Software Developer</h2>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
          <Logo />
        </div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Home;
