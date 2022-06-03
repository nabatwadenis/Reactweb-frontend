import React from 'react';
import './Possibility.css'
import possibilityImage from '../../Assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt ="possibility"/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early access to get started</h4>
        <h1 className='gradient__text'>The possibilty are beyond our imagination</h1>
        <p>the realization of Artificial intelligence will spearhead even Virtual reality tech foward and be a frontrunner in tech and the innevitable future and Artificial Inteligence. this is the product malleabilility and occurent likeability and frame of refernce in future project speculations in the field. this is all template rambling pay no mind to this paragraph of text. the content is the key issue in this scenario.</p>
        <h4>Request early access to get started</h4>
      </div>

    </div>
  )
}

export default Possibility