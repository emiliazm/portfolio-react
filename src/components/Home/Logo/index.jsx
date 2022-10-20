import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import LogoS from '../../../assets/images/logo-e.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 1,
        duration: 20,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 6,
      },
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="248.9pt"
        height="269.62pt"
        version="1.0"
        viewBox="0 0 248.9 269.62"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          // transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M41.24,148.37c-2.85-64,41-105.5,88.42-107.61,56.18-2.51,85.83,37.09,88.23,90.92a132.1,132.1,0,0,1-1.28,25.93l-118,5.27c6.52,28.38,26.69,40.63,53,39.46,14.91-.67,28.13-5.8,42.07-14.81l20.9,34.37c-19.59,14.89-45.61,24.29-69,25.34C89.4,249.75,44.16,213.67,41.24,148.37ZM167.4,121.09c-1-21.69-11.11-36.89-34.44-35.85-18.47.83-33.86,13.93-36.72,39Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
