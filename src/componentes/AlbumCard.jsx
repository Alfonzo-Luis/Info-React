import React from 'react';
import './AlbumCard.css';

const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <img src={album.cover} alt={album.title} />
      <div className="album-info">
        <h4>{album.title}</h4>
        <p>{album.artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
