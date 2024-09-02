import React from 'react';
import './PlaylistItem.css';

const PlaylistItem = ({ playlist }) => {
  return (
    <div className="playlist-item">
      <img src={playlist.image} alt={playlist.title} />
      <div className="playlist-info">
        <h4>{playlist.title}</h4>
        <p>{playlist.description}</p>
      </div>
    </div>
  );
};

export default PlaylistItem;