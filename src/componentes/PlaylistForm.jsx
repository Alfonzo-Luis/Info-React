import React, { useState } from 'react';
import './PlaylistForm.css';

const PlaylistForm = ({ addPlaylist, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddPlaylist = () => {
    addPlaylist({ title, description, imageUrl });
    setTitle('');
    setDescription('');
    setImageUrl('');
    onClose();  
  };

  return (
    <div className="playlist-form">
      <h2>Nueva Playlist</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de imagen"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button
        onClick={handleAddPlaylist}
        disabled={!title || !description || !imageUrl}
      >
        Agregar Playlist
      </button>
      <button onClick={onClose}>Cancelar</button>
    </div>
  );
};


export default PlaylistForm;