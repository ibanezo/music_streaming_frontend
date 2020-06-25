import React from 'react';
import SearchBox from './components/SearchBox.jsx';
import SongListingItem from './components/SongListingItem.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="bg">
        <img src="/background1.jpg" alt=""></img>
      </div>
      <SearchBox className="search"/> 
      <SongListingItem className="songs"/>
    </div>
  );
}

export default App;
