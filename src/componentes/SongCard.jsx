import React from 'react';
import './SongCard.css';

const SongCard = ({ cover, title, artist, children }) => {
  return (
    <div className="song-card">
      <img src={cover} alt={title} />
      <div className="song-info">
        <h4>{title}</h4>
        <p>{artist}</p>
        {children}{' '}
      </div>
    </div>
  );
};

export default SongCard;
