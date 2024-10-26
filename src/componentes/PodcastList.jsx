import React, { useEffect, useState, useRef } from 'react';
import './PodcastList.css';
import PlaybackBar from './PlaybackBar';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const [currentPodcast, setCurrentPodcast] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

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
      setCurrentPodcast(podcast);
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

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? podcasts.length - 7 : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === podcasts.length - 7 ? 0 : prevIndex + 1
    );
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (podcasts.length === 0) {
    return <div>Loading podcasts...</div>;
  }

  const visiblePodcasts = podcasts.slice(currentIndex, currentIndex + 7);

  return (
    <div className="podcast-list-container">
      <button className="arrow arrow-left" onClick={slideLeft}>
        &#9664;
      </button>
      <div className="podcast-list">
        <ul>
          {visiblePodcasts.map((podcast) => (
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
      </div>
      <button className="arrow arrow-right" onClick={slideRight}>
        &#9654;
      </button>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
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