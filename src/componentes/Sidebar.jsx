import React, { useState, useEffect, useRef } from 'react';
import PlaylistForm from './PlaylistForm';
import './Sidebar.css';

const Sidebar = ({ showSidebar, onClose, addPlaylist }) => {
  const [showForm, setShowForm] = useState(false);
  const sidebarRef = useRef(null);

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
        {showForm ? 'Volver al menu' : 'Nueva Playlist'}
      </button>
      
      {showForm && (
        <PlaylistForm
          addPlaylist={addPlaylist}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
};

export default Sidebar;