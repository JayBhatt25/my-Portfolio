import React, { useRef, useState } from 'react'
import './contact.scss'
import '../shared/animated-titles.scss'
import Phone from '../../images/phone.webp'
import Email from '../../images/email.webp'
import Address from '../../images/address.webp'
import emailjs from '@emailjs/browser';
import { useEffect } from 'react'

function Contact() {
    let [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [sub, setSub] = useState();
    const formRef = useRef();
    const [valid, setValid] = useState(false);
    useEffect(() => {
        validateForm();
      },[user,email,sub, valid]);
    const validateForm = () => {

        if(!user ){
            setValid(false);
        } else if ( !email || !email.toLowerCase().match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            setValid(false);
            
        } else if(!sub){
            setValid(false);
        }
        else {
            setValid(true);
        }
    }
    const handleSubmit = (e) => {
       e.preventDefault();
        
        validateForm();
        if(valid){
            emailjs.sendForm('service_rvagvju', 'template_2nrkm7h', formRef.current, 'user_gI6Fw8eRy2JAcEK2b8oBK')
            .then((result) => {
                document.getElementById('emailForm').reset();
            }, (error) => {
                console.log(error.text);
            });
        } else {
            alert("Make sure all the values are filled");
        }
    
   };
    
  return (
    <div className="contact">
       {/* <div className="c_bg"></div> */}
       <div className="c_container">
           <div className="c_left">
                <h1 className="c_title animated-title contact-title">Interested in my work ? Contact Me!</h1>
                <div className="c_info">
                    <div className="c_info_item">
                        <img src={Phone} alt="Phone img" className="c_icon" />
                         +19802676925
                    </div>
                    <div className="c_info_item">
                        <img src={Email} alt="Email img" className="c_icon" />
                         jaybhatt2502@gmail.com
                    </div>
                    <div className="c_info_item">
                        <img src={Address} alt="Address img" className="c_icon" />
                        Charlotte, NC
                    </div>
                    
                </div>
           </div>
           <div className="c_right">
                <p className="c_desc"> OR, You can simply fill out the form below with a message and your email and i will get to you as soon as i can.</p>
                 <form id='emailForm' ref={formRef} onSubmit={handleSubmit}>
                     <input id='user' type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder='Your Name' name="user_name"  required/>
                     <input id='subject'type="text" value={sub} onChange={(e) => setSub(e.target.value)}  placeholder='Subject' name="user_subject"  required/>
                     <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email' name="user_email"  required/>
                     <textarea rows="5" name="message"  required/>
                     <button className='contactSubmitButton' onClick={handleSubmit}>Submit</button>
                    
                 </form>
           </div>
       </div>
    </div>
  )
}

export default Contact