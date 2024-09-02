import React, { useState } from 'react';
import './PlaylistForm.css';

const PlaylistForm = ({ addPlaylist }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = () => {
    setIsValid(title !== '' && description !== '' && image !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      addPlaylist({ title, description, image });
      setTitle('');
      setDescription('');
      setImage('');
      setIsValid(false);
    }
  };

  return (
    <form className="playlist-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          handleInputChange();
        }}
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          handleInputChange();
        }}
      />
      <input
        type="text"
        placeholder="Imagen (URL)"
        value={image}
        onChange={(e) => {
          setImage(e.target.value);
          handleInputChange();
        }}
      />
      <button type="submit" disabled={!isValid}>
        Agregar Playlist
      </button>
      <div className="playlist-preview">
        <h4>{title}</h4>
        <p>{description}</p>
        {image && <img src={image} alt="Playlist cover" />}
      </div>
    </form>
  );
};

export default PlaylistForm;