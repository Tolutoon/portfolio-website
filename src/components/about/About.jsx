import React from 'react';
import './about.css';
import Image from '../../assets/imagei.jpg';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>About Me</h2>

      <div className='about__container grid'>
        <img src={Image} alt='' className='about__img' />

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>I am Tolu Olopade, Software developer from Lagos, Nigeria. I have a good experience in software development and building and customization, also I am good at User Interface Designs.</p>
            <a href='' className='btn'>Download CV</a>
          </div>

          <div className='about__skills grid'>
            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Development</h3>
                <span className='skills__number'>85%</span>
              </div>

              <div className='skills__bar'>
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>UI Design</h3>
                <span className='skills__number'>70%</span>
              </div>

              <div className='skills__bar'>
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Illustration</h3>
                <span className='skills__number'>60%</span>
              </div>

              <div className='skills__bar'>
                <span className="skills__percentage illustration"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About