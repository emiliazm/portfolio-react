import './index.scss';
import Loader from 'react-loaders';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 4000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        'default_service',
        'contact_form',
        form.current,
        'veHbOKuJFtqnPaQ-p',
      )
      .then(
        () => {
          alert('Message sent, I will get back to you soon!');
        },
        () => {
          alert('An error occured, please try again');
        },
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I am interested in remote or relocation jobs.
            Contact me if you have any requests or questions using the below form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>

          </div>
        </div>
      </div>
      <Logo />
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Contact;