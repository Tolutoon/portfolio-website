import React from 'react';


const Details = (props) => {
  return (
    <div className='certify__item'>
        <i className={props.icon}></i>
        <div className='certify__details'>
            <h3 className='certify__title'>{props.title}</h3>
            <span className='certify__source'>Provider: {props.source}</span>
            <span className='certify__year'>Issued: {props.year}</span>
            <span className='certify__desc'>{props.desc}</span>
        </div>
    </div>
  )
};

export default Details;