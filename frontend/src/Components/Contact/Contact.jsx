import React, {useRef, useState , useContext} from 'react';
import "./contact.scss";
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";



const Contact = () => {
  const [done,setDone] = useState(false);
  const form = useRef();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fqmb4uu', 'template_316m5ye', form.current, 'TCFHROZYjuZePh5eG')
      .then((result) => {
          console.log(result.text);
          setDone(true);

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact' id='Contact'>
      <div className="c-left">
        <div className="awesome">
            <span style={{color:darkMode? "white":""}}>Get in touch </span>
            <span>Contact me</span>
        </div>
        <div className="blur1" style={{ background: "skyblue" }}></div>
        
      </div>


      {/* right */}
      <div className="c-right">
        <form autoComplete="off" ref={form} onSubmit={sendEmail}>
          <input required type="text" name="user_name" className='user'  placeholder='Name' />
          <input required type="email" name='user_email' className='user'  placeholder='Email' />
          <textarea required name="message"  className='user'  placeholder='Message' />
          <input type="submit" value="Send"  className='button'/>
          <span>{done && "Thanks for contacting me!"}</span>
        </form>
      <div className="blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Contact;


