import React from 'react';
import { Feature } from '../../components';
import './Whatgp3.css';

const Whatgp3 = () => {
  return (
    <div className='gpt3__whatgp3 section__margin' id='whatgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text='this is a ui/ux model designed by rich models deign. it is a react design'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbox" text="this is an interactive environment for user to communicate with other users on the web"/>
        <Feature title="knowledgebase" text="this is the collective knowledge from gathered information"/>
        <Feature title="Education" text="this is the structured information made available through conventional educational system"/>
      </div>

    </div>
  )
}

export default Whatgp3