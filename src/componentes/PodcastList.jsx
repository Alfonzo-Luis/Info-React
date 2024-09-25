import React, { useEffect, useState, useRef } from 'react';

import './PodcastList.css';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        console.log('Fetching podcasts...'); 
        const response = await fetch('https://api.audioboom.com/audio_clips');
        console.log('Response status:', response.status); 
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        console.log('Fetched podcasts:', data.body.audio_clips); 
        setPodcasts(data.body.audio_clips);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching podcasts:', error);
      }
    };

    fetchPodcasts();
  }, []);

  const handlePlay = (url) => {
    if (currentAudio === url) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentAudio(url);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((err) => console.error('Error playing audio:', err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currentAudio) {
      audioRef.current.src = currentAudio;
      audioRef.current.load();
    }
  }, [currentAudio]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (podcasts.length === 0) {
    return <div>Loading podcasts...</div>;
  }

  return (
    <div>
      <h2>Podcast Episodes</h2>
      <ul>
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <img
              src={podcast.channel?.urls?.logo_image?.original}
              alt={podcast.title}
            />
            <h3 title={podcast.title}>
              {podcast.title && podcast.title.length > 30
                ? `${podcast.title.slice(0, 30)}...`
                : podcast.title}
            </h3>
            <p title={podcast.description}>
              {podcast.description && podcast.description.length > 50
                ? `${podcast.description.slice(0, 50)}...`
                : podcast.description}
            </p>
            <button onClick={() => handlePlay(podcast.urls.high_mp3)}>
              {isPlaying && currentAudio === podcast.urls.high_mp3
                ? 'Pause'
                : 'Play'}
            </button>
          </li>
        ))}
      </ul>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default PodcastList;
