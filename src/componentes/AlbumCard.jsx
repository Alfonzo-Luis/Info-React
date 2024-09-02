import React from 'react';
import './AlbumCard.css';

const AlbumCard = ({ cover, title, artist, children }) => {
  return (
    <div className="album-card">
      <img src={cover} alt={title} />
      <div className="album-info">
        <h4>{title}</h4>
        <p>{artist}</p>
        {children}
      </div>
    </div>
  );
};

export default AlbumCard;