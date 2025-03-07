import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import testBG from '../../assets/images/nashSteed.png';
import emailjs from '@emailjs/browser';

const Contact2 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [letterClass, setLetterClass] = useState('text-hidden'); // Start hidden
  const [isLoaded, setIsLoaded] = useState(false); // Track if fully loaded

  const jobArray = ['G', 'R', 'A', 'P', 'H', 'I', 'C', ' ', 'D', 'E', 'S', 'I', 'G', 'N', ',', ' ', 'W', 'E', 'B', ' ', 'D', 'E','V','E','L','O','P','E','R']

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate'); // Apply animation after delay
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        () => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <>
      <div className="home-page2">

        <img src={testBG} alt="Nash Steed" onLoad={() => setIsLoaded(true)} />
        {/* <form onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" required />
          <label>Email</label>
          <input type="email" name="to_name" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" disabled={isSubmitting} />
          {stateMessage && <p>{stateMessage}</p>}
        </form> */}
        {isLoaded && (
          <div>
            <h3>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={4} />
            </h3>

            <div className="flat-square-contact">
                <h4>EMAIL: NASHSTEED.DESIGN@GMAIL.COM</h4>
                <h4>PHONE: (804) 219-7366</h4>
                </div>

            <div className="buttons">
              <a href="https://www.linkedin.com/in/nash-steed/" target="_blank" rel="noopener noreferrer" className="flat-button3 right2">
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact2;
