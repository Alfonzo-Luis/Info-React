import React, { useEffect, useState, useRef } from 'react';
import './PodcastList.css';
import PlaybackBar from './PlaybackBar'; // Importamos el PlaybackBar

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [error, setError] = useState(null);
  const [currentPodcast, setCurrentPodcast] = useState(null); // Guardar el podcast que se está reproduciendo

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch('https://api.audioboom.com/audio_clips');
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        setPodcasts(data.body.audio_clips);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPodcasts();
  }, []);

  const handlePlay = (podcast) => {
    const { high_mp3: url } = podcast.urls;
    if (currentAudio === url) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentAudio(url);
      setIsPlaying(true);
      setCurrentPodcast(podcast); // Guardar el podcast actual
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
            <button onClick={() => handlePlay(podcast)}>
              {isPlaying && currentAudio === podcast.urls.high_mp3
                ? 'Pause'
                : 'Play'}
            </button>
          </li>
        ))}
      </ul>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
      
      {/* Agregar PlaybackBar, pasamos los datos del podcast actual */}
      {currentPodcast && (
        <PlaybackBar
          isPlaying={isPlaying}
          podcast={currentPodcast}
          onPlayPause={() => setIsPlaying((prev) => !prev)}
          audioRef={audioRef}
          closePlayback={() => setCurrentPodcast(null)}
        />
      )}
    </div>
  );
};

export default PodcastList;