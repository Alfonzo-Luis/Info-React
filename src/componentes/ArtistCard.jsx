import React from 'react';
import './ArtistCard.css';

const ArtistCard = ({ artist }) => {
  return (
    <div className="artist-card">
      <img src={artist.image} alt={artist.name} />
      <div className="artist-info">
        <h4>{artist.name}</h4>
      </div>
    </div>
  );
};

export default ArtistCard;
