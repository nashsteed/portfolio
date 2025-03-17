import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import testBG from '../../assets/images/nashSteed.png';
import label from '../../assets/images/NASH FONT LABEL.png'
import emailjs from '@emailjs/browser';
import styles from '../Home2/Home2.scss'
import { useRef } from 'react';

const Contact2 = () => {

  const form = useRef();

  const [status, setStatus] = useState(""); // to track success or error

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading
  
    emailjs
      .sendForm('service_cfybuga', 'template_nw2pmyg', form.current, {
        publicKey: 'LyZjyMrUUTbdsppkr',
      })
      .then(
        () => {
          setStatus("success");
          setIsSubmitting(false); // Stop loading
        },
        (error) => {
          setStatus("error");
          setIsSubmitting(false); // Stop loading
        }
      );
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [letterClass, setLetterClass] = useState('text-hidden'); // Start hidden
  const [isLoaded, setIsLoaded] = useState(false); // Track if fully loaded

  const jobArray = ['G', 'R', 'A', 'P', 'H', 'I', 'C', ' ', 'D', 'E', 'S', 'I', 'G', 'N','E','R',' ', '+', ' ', 'W', 'E', 'B', ' ', 'D', 'E','V','E','L','O','P','E','R']

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate'); // Apply animation after delay
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  return (
    <>
      <div className="home-page2">

        <img src={testBG} alt="Nash Steed" onLoad={() => setIsLoaded(true)}/>
        <img className="label-name" src={label} alt="Nash Steed" onLoad={() => setIsLoaded(true)}/>
        {isLoaded && (
          <div className='form-area'>
            {/* <h3>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={4} />
            </h3> */}

            {/* <div className="flat-square-contact">
                <h4>EMAIL: </h4>
                  <h4>NASHSTEED.DESIGN@GMAIL.COM</h4>
                <h4>PHONE:</h4>
                <h4>804.219.7366</h4>
                </div> */}

            <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input required placeholder="Enter your name" type="text" name="user_name" className='name' />
      <label>Email</label>
      <input required placeholder="Enter your email" type="email" name="user_email" className='name' />
      <label>Subject</label>
      <input required placeholder="Enter your subject" type="text" name="title" className='name' />
      <label>Message</label>
      <textarea required placeholder="Enter your message" name="message" className='message'/>
      
      <button
      className={`flat-button3 center2 form-button ${status === "success" ? "success" : status === "error" ? "error" : ""}`}
      type="submit"
      disabled={isSubmitting} // Disable button while loading
    >
      {isSubmitting ? <span className="loader"></span> : status === "success" ? "Sent!" : status === "error" ? "Error" : "Send"}
    </button>    </form>

            

            {/* <div className="buttons">
              <a href="https://www.linkedin.com/in/nash-steed/" target="_blank" rel="noopener noreferrer" className="flat-button3 right2">
                LinkedIn
              </a>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Contact2;
