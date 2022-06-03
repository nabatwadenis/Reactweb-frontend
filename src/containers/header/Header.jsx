import React from 'react';
import './Header.css';
import people from '../../Assets/people.png';
import ai from '../../Assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Lets Build something amazing with Gpt3 open AI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sequi quibusdam excepturi, doloremque facere officiis.</p>
        <div className='gpt3__header-content_input'>
          <input type="email" placeholder='your Email address' />
          <button type='button'>Get started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1600 people requested access in the last 24hrs</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header