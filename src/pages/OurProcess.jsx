import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import ReactAudioPlayer from 'react-h5-audio-player';
import sampleMusic from '../assets/audio.mp3'; // Replace with your actual music file path
import './OurProcess.css';
import image from '../assets/Procedure.png';

const OurProcess = () => {
  return (
    <div className="container">
      <img src={image} alt='Process' />

      <div className="samplemusic">
        <h2>Sample Music:</h2>
        <div className="music-container">
          <ReactAudioPlayer
            src={sampleMusic}
            autoPlay={false}
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
