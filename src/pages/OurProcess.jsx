import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import './OurProcess.css';
import image from '../assets/Procedure.png';
import SampleMusic from '../components/SampleMusic';

const OurProcess = () => {
  return (
    <div className="proc">
    <div className="container">
      <div className="music-container">
        <SampleMusic />
        <hr/>
        <div className="process-image">
          <img src={image} alt="Process" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurProcess;
