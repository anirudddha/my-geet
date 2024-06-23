import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import ReactAudioPlayer from 'react-h5-audio-player';
import './OurProcess.css';
import image from '../assets/Procedure.png';
import SampleMusic from '../components/SampleMusic';

const OurProcess = () => {
  return (
    <div className="container">
      <div className="music-container">
        <SampleMusic />
        <div className="process-image">
          <img src={image} alt="Process" />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
