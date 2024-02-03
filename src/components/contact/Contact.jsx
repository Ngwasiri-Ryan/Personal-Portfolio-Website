import React from 'react'
import  { useRef } from 'react';
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ij0vsp1', 'template_ao5iith', form.current, 'ip41CGhs3MowyAGey')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <section id="contact">
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>


    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
         <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>ryanngwasiri@gmail.com</h5>
          <a href="mailto:ryanngwasiri@gmail.com">Send a message</a>
        </article>

        <article className="contact__option">
         <RiMessengerLine className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>ngwasiriryantaniform</h5>
          <a href="https://m.me/ngwasiriryantaniform">Send a message</a>
        </article>

        <article className="contact__option">
         <BsWhatsapp className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <h5>+237 650982351</h5>
          <a href="https://wa.link/vxfkwx">Send a message</a>
        </article>

      </div>
      {/***end of contact options */}

      <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Full Name' required/>
         <input type="email" name='email' placeholder='Your Email' required/>
         <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>

    </div>
   </section>
  )
}

export default Contact