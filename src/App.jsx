import React from 'react'
import Header from './componentes/Header'
import PlaybackBar from './componentes/PlaybackBar'
import SongCard from './componentes/SongCard'
import AlbumCard from './componentes/AlbumCard'
import ArtistCard from './componentes/ArtistCard'
import kingCover from './images/king.jpeg'
import keyCover from './images/play.jpg'
import moonCover from './images/moon.jpg'
import metalCover from './images/metal.jpg'
import heavenCover from './images/heaven.jpg'
import mushCover from './images/mushroom.jpg'
import hakitaCover from './images/hakita.jpeg'
import nekoCover from './images/neko.jpg'
import './App.css'



function App() {

  const recentSongs = [
    { title: 'in the court of the crimson king', artist: 'King Crimson', cover: kingCover },
    { title: 'Tenebre Rosso Sangue', artist: 'KEYGEN CHURCH', cover: keyCover },
    
  ];

  const quickPicks = [
    { title: 'Hydrogen', artist: 'M.O.O.N', cover: moonCover },
    { title: 'Welcome Home (Sanatorium)', artist: 'Metallica', cover: metalCover },
    
  ];

  const recommendedAlbums = [
    { title: 'Heaven Pierce Her', artist: 'Hakita', cover: heavenCover },
    { title: 'Legend of the Black Shawarma', artist: 'Infected Mushroom', cover: mushCover },
    
  ];

  const similarArtists = [
    { name: 'Hakita', image: hakitaCover },
    { name: 'Meganeko', image: nekoCover },
    
  ];
  return (
    
      <div className="app">
        
          <Header />
          
          <section className="listen-again">
        <h2>Listen Again</h2>

        <div className="song-list">
          {recentSongs.map((song, index) => (
            <SongCard key={index} song={song} />
          ))}
        </div>
      </section>

      <section className="quick-picks">
        <h2>Quick Picks</h2>
        <div className="song-list">
          {quickPicks.map((song, index) => (
            <SongCard key={index} song={song} />
          ))}
        </div>
      </section>

      <section className="recommended-albums">
        <h2>Recommended Albums</h2>
        <div className="album-list">
          {recommendedAlbums.map((album, index) => (
            <AlbumCard key={index} album={album} />
          ))}
        </div>
      </section>

      <section className="similar-artists">
        <h2>Artists like [KEYGEN CHURCH]</h2>
        <div className="artist-list">
          {similarArtists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>
      </section>

          <PlaybackBar />

      </div>
    )
}

export default App