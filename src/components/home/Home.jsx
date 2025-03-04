import React from 'react';
import './home.css';
import Me from '../../assets/IMG_0761.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Typewriter from 'typewriter-effect';

const Home = () => {


  /* useEffect(()=> {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: false,
      strings:[
        'a Front-End Developer',
        'a User-Interface Designer',
        'an Illustrator',
      ]
    })
  }, []); */

  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='' className='home__img'/>
        <h1 className='home__name'>Tolu</h1>
        <h4 className='home__education'>
          <Typewriter 
          onInit={(typewriter) => {
            typewriter
            .typeString('I\'m a Flutter Developer')

            .pauseFor(1800)
            .deleteAll()
            .typeString('I\'m a Designer')
            .pauseFor(1500)
            .deleteAll()

            .start()
            .typeString('I\'m an Illustrator')
            .pauseFor(800)
            .deleteAll()
            .typeString('I\'m a Software Developer')
          }}
          />
          </h4>

        <HeaderSocials />

        <a href='#contact' className='btn'>Hire Me</a>

        <ScrollDown/>
      </div>
      
       {/* <Shapes/> */}
    </section>
  )
}

export default Home;