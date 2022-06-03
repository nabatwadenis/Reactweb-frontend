import React from 'react';
import { Feature } from '../../components';
import './Features.css';

const featuresData = [
  {
    title:'Improving end distrust completely',
    text:'the plan is to make sure our products are market ready and follow the figma design stipulated in the contract'
  },
  {
    title:'Being the frontier of change',
    text:'the plan is to make sure our products are market ready and follow the figma design stipulated in the contract'
  },
  {
    title:'Coding for passion and will',
    text:'the plan is to make sure our products are market ready and follow the figma design stipulated in the contract'
  },
  {
    title:'Intriging clientelle with exciting new features',
    text:'the plan is to make sure our products are market ready and follow the figma design stipulated in the contract'
  }
]

const Features = () => (
  <div className='gpt3__features section__padding' id='features'>
    <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>The future is now and you just need to realize it. Step into Future today and make it happen</h1>
      <p>Request early access to get started</p>
    </div>
    <div className='gpt3__features-container'>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text ={item.text} key={item.title + index}/>
      ))}
    </div>

  </div>
  
);

export default Features;