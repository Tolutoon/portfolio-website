import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const displayNotification = (message, type) => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    }
  };

  const validateForm = () => {
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const subject = form.current.message.value.trim();
    const message = form.current.querySelector('textarea').value.trim();

    if (!name || !email || !subject || !message) {
      displayNotification('All fields are required', 'error');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayNotification('Please enter a valid email address', 'error');
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm('service_kdpnvqn', 'template_mf2nfwd', form.current, 'G1vx6uLDHw57tu-OV')
      .then(
        (result) => {
          console.log(result.text);
          displayNotification('Message Sent', 'success');
          form.current.reset(); // Clear the form after successful submission
        },
        (error) => {
          console.error(error.text);
          displayNotification('Failed to send message. Try again later.', 'error');
        }
      );
  };

  return (
    <section className='contact container section' id='contact'>
      <h2 className='section__title'>Get In Touch</h2>

      <div className='contact__container grid'>
        <div className='contact__info'>
          <h3 className='contact__title'>Let's talk about everything!</h3>
          <p className='contact__details'>Don't like forms? Send me an email.</p>
        </div>

        <form action='' className='contact__form' ref={form} onSubmit={sendEmail}>
          <div className='contact__form-group'>
            <div className='contact__form-div'>
              <input
                type='text'
                className='contact__form-input'
                name='user_name'
                placeholder='Insert your name'
              />
            </div>

            <div className='contact__form-div'>
              <input
                type='email'
                className='contact__form-input'
                name='user_email'
                placeholder='Insert your email'
              />
            </div>
          </div>

          <div className='contact__form-div'>
            <input
              type='text'
              className='contact__form-input'
              name='message'
              placeholder='Insert your subject'
            />
          </div>

          <div className='contact__form-div contact__form-area'>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              className='contact__form-input'
              placeholder='Write your message'
            ></textarea>
          </div>

          <button className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
