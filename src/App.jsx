import React, {useState} from 'react';
import Header from './componentes/Header';
import SongCard from './componentes/SongCard';
import AlbumCard from './componentes/AlbumCard';
import ArtistCard from './componentes/ArtistCard';
import PlaybackBar from './componentes/PlaybackBar';
import Sidebar from './componentes/Sidebar';
import PodcastList from './componentes/PodcastList';
import './index.css';

import { recentSongs, quickPicks, recommendedAlbums, similarArtists } from './data';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const addPlaylist = (playlist) => {
    setPlaylists([...playlists, playlist]);
  };


  
  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar showSidebar={showSidebar} onClose={closeSidebar} addPlaylist={addPlaylist} />
      <div className='main'>
      <h2>Playlists</h2>
      <h2>Podcasts</h2>
        <PodcastList />
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>
              <img src={playlist.imageUrl} alt={playlist.title} width={50} height={50} />
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </li>
          ))}
        </ul>
      <section className="listen-again">
        <h2>Listen Again</h2>
        <div className="song-list">
          {recentSongs.map(song => (
            <SongCard key={song.title} cover={song.cover} title={song.title} artist={song.artist}>
            </SongCard>
          ))}
        </div>
      </section>
      </div>
      <section className="quick-picks">
        <h2>Quick Picks</h2>
        <div className="song-list">
          {quickPicks.map(song => (
            <SongCard key={song.title} cover={song.cover} title={song.title} artist={song.artist}>
            </SongCard>
          ))}
        </div>
      </section>

      <section className="recommended-albums">
        <h2>Recommended Albums</h2>
        <div className="album-list">
          {recommendedAlbums.map(album => (
            <AlbumCard key={album.title} cover={album.cover} title={album.title} artist={album.artist}>
            </AlbumCard>
          ))}
        </div>
      </section>

      <section className="similar-artists">
        <h2>Similar to [KEYGEN CHURCH]</h2>
        <div className="artist-list">
          {similarArtists.map(artist => (
            <ArtistCard key={artist.name} image={artist.image} name={artist.name}>
            </ArtistCard>
          ))}
        </div>
      </section>

      <PlaybackBar />
    </div>
  );
};

export default App;