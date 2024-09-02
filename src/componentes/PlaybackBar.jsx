import React from 'react';
import play from '../images/play.jpg'
import './PlaybackBar.css';

const PlaybackBar = () => {0
  return (
    <div className="playback-bar">
    <div>
      <img src={play} alt="current-Song" />
    </div>
      <div className="current-track-info">
        <div className="track-details">
          <h4>Tenebre Rosso Sangue</h4>
          <p>KEYGEN CHURCH</p>
        </div>
      </div>
    </div>
  );
};

export default PlaybackBar;
