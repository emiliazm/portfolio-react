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
          portfolio.map((port, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt={port.title}
              />
              <div className="overlay" />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="tools">{port.tools}</h4>
                <p className="description">{port.description}</p>
                <div className="work-buttons">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => window.open(port.url)}
                  >
                    See live
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => window.open(port.source)}
                  >
                    See source
                  </button>
                </div>
              </div>
            </div>
          ))
        }
    </div>
  );

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1 className="title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Portfolio'.split('')}
              idx={15}
            />
          </h1>
          <p>
            If you are interested in
            {' '}
            <span className="font-color">my work,</span>
            {' '}
            you can check out some of my projects here.
          </p>
        </div>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Portfolio;
