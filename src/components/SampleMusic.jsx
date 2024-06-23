import React, { useState } from 'react';
import './SampleMusic.css';
import ReactAudioPlayer from 'react-h5-audio-player';
import song from '../assets/audio.mp3';

const songs = [
  { id: 1, title: 'Sample 1', description: 'Proposal Song (Male)', duration: '01:03', url: '/src/assets/audio.mp3' },
  { id: 2, title: 'Sample 2', description: 'Proposal Song (Female)', duration: '01:19', url: '/src/assets/audio.mp3' },
  { id: 3, title: 'Sample 3', description: 'Birthday Song (Male)', duration: '00:45', url: '/src/assets/audio.mp3' },
  { id: 4, title: 'Sample 4', description: 'Birthday Song (Female)', duration: '01:26', url: 'path_to_song_4.mp3' },
  { id: 5, title: 'Sample 5', description: 'Anniversary Song (Male)', duration: '01:05', url: 'path_to_song_5.mp3' },
  { id: 6, title: 'Sample 6', description: 'Anniversary Song (Female)', duration: '01:26', url: 'path_to_song_6.mp3' },
];

const SampleMusic = () => {
  const [currentSong, setCurrentSong] = useState(song);

  const playSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="sample-music">
      <h1>Sample Songs</h1>
      <div className="sample-music-container my-3">
        <div className="sample-music-list my-3">
          {songs.map((song) => (
            <div key={song.id} className="sample-music-item">
              <div className="sample-music-item-left">
                <button onClick={() => playSong(song)} className="play-button">
                  <svg className='play-icon' width="24" height="24">
                    <path fill="white" d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div>
                  <div>{song.title}</div>
                  <div className="sample-music-description">{song.description}</div>
                </div>
              </div>
              <div className="sample-music-duration">{song.duration}</div>
            </div>
          ))}
        </div>
        <div className="audio-player">
          <div className="player-container">
            <ReactAudioPlayer style={{borderRadius:'10px',width:"90%",height:"100px",border:"solid 2px brown"}} src={currentSong.url} autoPlay={false} controls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleMusic;
