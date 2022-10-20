import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 4000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const renderPortfolio = (portfolio) => (
    <div className="images-container">
      {
          portfolio.map((port) => (
            <div className="image-box" key={port}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt={port.title}
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button
                  type="button"
                  className="btn"
                  onClick={() => window.open(port.url)}
                >
                  View
                </button>
              </div>
            </div>
          ))
        }
    </div>
  );

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Portfolio;
