import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import ReactAudioPlayer from 'react-h5-audio-player';
import sampleMusic from '../assets/audio.mp3';
import sampleMusic1 from '../assets/AVNI.wav'; // Replace with your actual music file path
import './OurProcess.css';

const OurProcess = () => {
  return (
    <div className="container">
      <h2 style={{ marginTop: "20px",fontWeight:"500",fontSize:"35px" }}>Consultation</h2>
      <p>We start with a consultation to understand your needs and the occasion you're celebrating.</p>

      <h2 style={{ marginTop: "20px" ,fontWeight:"500",fontSize:"35px"}}>Lyrics and Melody:</h2>
      <p>Our talented songwriters craft lyrics and melodies that capture the essence of your message.</p>

      <h2 style={{ marginTop: "20px",fontWeight:"500",fontSize:"35px" }}>Review and Revise:</h2>
      <p>We share the draft with you for feedback and make any necessary revisions.</p>

      <h2 style={{ marginTop: "20px",fontWeight:"500",fontSize:"35px" }}>Final Production:</h2>
      <p>Once approved, our professional musicians bring your song to life with a high-quality recording.</p>

      <div className="samplemusic">
        <h2>Sample Music1:</h2>
        <div className="music-container">
          <ReactAudioPlayer
            src={sampleMusic}
            autoPlay={false}
            controls
          />
        </div>
      </div>
      
      <div className="samplemusic">
        <h2>Sample Music2:</h2>
        <div className="music-container">
          <ReactAudioPlayer
            src={sampleMusic1}
            autoPlay={false}
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
