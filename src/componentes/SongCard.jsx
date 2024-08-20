import React from 'react';
import './SongCard.css';

const SongCard = ({ song }) => {
  return (
    <div className="song-card">
      <div>
        <img src={song.cover} alt={song.title} />
      </div>
      <div className="song-info">
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
