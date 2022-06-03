import React from 'react';
import './brand.css';
import google from '../../Assets/google.png';
import shopify from '../../Assets/shopify.png';
import slack from '../../Assets/slack.png';
import dropbox from '../../Assets/dropbox.png';
import atlassian from '../../Assets/atlassian.png';

const brand = () => {
  return (
    <div className='brand__items section-padding'>
      <div className='brand__items-list'>
        <img src={google} alt='google' />
      </div>
      <div className='brand__items-list'>
        <img src={atlassian} alt='atlassian' />
      </div>
      <div className='brand__items-list'>
        <img src={slack} alt='slack' />
      </div>
      <div className='brand__items-list'>
        <img src={shopify} alt='shopify' />
      </div>
      <div className='brand__items-list'>
        <img src={dropbox} alt='dropbox' />
      </div>
    </div>
  )
}

export default brand