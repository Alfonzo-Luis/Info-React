import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';

const Sidebar = ({ showSidebar, onClose, addPlaylist }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showForm, setShowForm] = useState(false);
  const sidebarRef = useRef(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);

  const handleAddPlaylist = () => {
    addPlaylist({ title, description, imageUrl });
    setTitle('');
    setDescription('');
    setImageUrl('');
    setShowForm(false);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setShowForm(false);
      onClose();
    }
  };

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSidebar]);

  return (
    <div className={`sidebar ${showSidebar ? 'sidebar-open' : ''}`} ref={sidebarRef}>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancelar' : 'Nueva Playlist'}
      </button>
      {showForm && (
        <div className="playlist-form">
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={handleDescriptionChange}
          />
          <input
            type="text"
            placeholder="URL de imagen"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
          <button
            onClick={handleAddPlaylist}
            disabled={!title || !description || !imageUrl}
          >
            Agregar Playlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;