import React from 'react';
import './PlaybackBar.css';

const PlaybackBar = ({ podcast, isPlaying, onPlayPause, audioRef, closePlayback }) => {
  if (!podcast) return null;

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  return (
    <div className="playback-bar">
      <div>
        {podcast.channel?.urls?.logo_image?.original ? (
          <img
            src={podcast.channel.urls.logo_image.original}
            alt={podcast.title || 'Podcast'}
            className="playback-image"
          />
        ) : (
          <img
            src="default_image_path.jpg"
            alt="Default Podcast"
            className="playback-image"
          />
        )}
      </div>
      <div className="current-track-info">
        <div className="track-details">
          <h4 title={podcast.title}>
            {podcast.title && podcast.title.length > 30
              ? `${podcast.title.slice(0, 30)}...`
              : podcast.title || 'No title'}
          </h4>
          <p>{podcast.channel?.title || 'No channel information'}</p>
        </div>
        <div className="playback-controls">
          <button onClick={onPlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={handleRewind}>Rewind 10s</button>
          <button onClick={handleForward}>Forward 10s</button>
          <button onClick={closePlayback}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PlaybackBar;