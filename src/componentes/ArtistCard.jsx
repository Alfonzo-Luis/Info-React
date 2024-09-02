import React from 'react';
import './ArtistCard.css';

const ArtistCard = ({ image, name, children }) => {
  return (
    <div className="artist-card">
      <img src={image} alt={name} />
      <div className="artist-info">
        <h4>{name}</h4>
        {children}{' '}
      </div>
    </div>
  );
};

export default ArtistCard;