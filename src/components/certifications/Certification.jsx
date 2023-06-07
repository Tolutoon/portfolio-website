import React from 'react';
import './certification.css';
import Data from './Datas';
import Details from './Details';

const Certification = () => {
  return (
    <section className='certificate container section' id='certificate'>
      <h2 className='section__title'>Certifications</h2>

      <div className='certify__container'>
        <div className='certify grid'>
          {Data.map((val, id) => {
            return (
              <Details 
              key={id}
              icon={val.icon}
              title={val.title}
              source={val.source}
              year={val.year}
              desc={val.desc}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certification