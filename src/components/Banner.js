import React from 'react'
import './banner.css';
import {FiPlay} from 'react-icons/fi'
import bartitle from './reusable/bartitle';
import Button from './reusable/Button';
import line from './reusable/line';
import Header from './Header';


function Banner() {
  return (
    <div className='main-container'>
     <Header/>
    <div className='container'>
      <div className='left-box'>
        <div className='bar-title'> 
        <div className='line-style'></div>
        <p>WITH PATRICK POTTER</p>
        </div>
        <h1>build perfect body shape for good and healthy life</h1>
        <button className='btn-style'>became a member</button>
      </div>
      <div className='right-box'>
        <div className='circle-btn'>
          <FiPlay/>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner;




