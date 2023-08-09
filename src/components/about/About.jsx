import React from "react";
import "./about.css";
import Image from "../../assets/my-image.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi there! My name is Olopade Tolu, and I'm a
              Front-End Developer with an adroit background in HTML5, CSS3, JavaScript. I strive to build user-friendly and
              visually appealing websites & mobile applications with frameworks & frontend technologies. I have a good experience in crafting
              responsive and accessible designs that adapt across
              various devices and screen sizes. Outside of coding, I have a
              creative side that I nurture through hobbies such as illustrating. 
              <br></br>Let's build something amazing together!
            </p>
            <a
              href="https://drive.google.com/file/d/19v14RFV-5ef_S2-lICtBOrqQx3RpAQEy/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="btn"
            >
              My Résumé
            </a>
          </div>

{ /*         <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI Design</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Illustration</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage illustration"></span>
              </div>
  </div> 
          </div>
                  */}
        </div>
      </div>
    </section>
  );
};

export default About;
