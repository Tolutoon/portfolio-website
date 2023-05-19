import React from 'react';

const HeaderSocials = () => {
  return (
    <div className='home__socials'>
        <a href='https://www.linkedin.com/in/tolu-olopade-1b4936139/' className='home__social-link' target='_blank'>
            <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href='https://www.instagram.com/tolutoon' className='home__social-link' target='_blank'>
            <i class='fa-brands fa-instagram'></i>
        </a>
        <a href='https://www.github.com/tolutoon' className='home__social-link' target='_blank'>
            <i class="fa-brands fa-github"></i>
        </a>
        <a href='https://twitter.com/tolutoon' className='home__social-link' target='_blank'>
            <i class="fa-brands fa-twitter"></i>
        </a>
        <a href='https://dribbble.com/' className='home__social-link' target='_blank'>
            <i class="fa-brands fa-dribbble"></i>
        </a>
        <a href='https://behance.com/' className='home__social-link' target='_blank'>
            <i class="fa-brands fa-behance"></i>
        </a>
    </div>
  )
}

export default HeaderSocials;