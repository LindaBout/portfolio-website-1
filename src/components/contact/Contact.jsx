import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const contactData = [
  {
    id: 1,
    icon: <HiOutlineMail />,
    contactType: 'Email',
    name: 'businlin@gmail.com',
    action: 'Send A Message',
    url: "mailto:businlin@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    contactType: 'Messenger',
    name: 'Linda Boutamine',
    action: 'Send A Message',
    url:"https://m.me/linda.lodz.14",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    contactType: 'WhatsApp',
    name: '+12345678',
    action: 'Send A Message',
    url:"https://api.whatsapp.com/send?phone=213777603817",
  }
]
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vsnfe6f', 'template_5esh71b', form.current, '8tFxMci0C0LLS6XqA')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactData.map(({ id, icon, contactType, name, action, url }) => {
            return (
              <article key={id}  className="contact__option">
                <div className='contact__option-icon'>{icon}</div>
                <h4>{contactType}</h4>
                <h5>{name}</h5>
                <a href={url} target='_blank'>{action}</a>
              </article>
            )
          })}
        </div>
        {/* =====END OF CONTACT OPTIONS====== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact