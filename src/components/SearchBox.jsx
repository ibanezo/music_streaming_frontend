import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import SongListingItem from './SongListingItem.jsx';
import './SongListingItem.css';
import './SearchBox.css';
import './Main.css';

const filter = createFilterOptions();

const SearchBox = (props) => {
  // const songs = props.items.map((item) => ({
  //   title: item.name
  // }));
  const songs = props.items;
  const [value, setValue] = React.useState(null);
  const [song, setSong] = React.useState(null);
  const [showComponent, setShowComponentFlag] = React.useState(false); // set this default state to null instead of false

  function handleClick(item) {
    // alert('The link was clicked.');
    setShowComponentFlag(true);
    console.log("item :: ", item);
    setSong(item);
  }

  return (
    <div className="search-box">
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          console.log("new value :: ", newValue);
          console.log("value :: ", value);
          handleClick(newValue);
          if (typeof newValue === 'string') {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        // options={songs.map((song) => ({
        //   title: song.name
        // }))}
        options={songs}
        getOptionLabel={(options) => {
          // Value selected with enter, right from the input
          if (typeof options.name === 'string') {
            return options.name;
          }
          // Add "xxx" options created dynamically
          if (options.inputValue) {
            return options.inputValue;
          }
          // Regular options
          return options.title;
        }}
        renderOptions={(options) => options.title}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Search your song..." variant="outlined" />
        )}
      />
      {/* {{console.log("SONG: ", song)} */}
      {/* {console.log("SONGS", songs)} */}
      {showComponent && song ?
        <SongListingItem items={song} className="songs" /> :
        <SongListingItem items={songs} className="songs" />
      }
    </div>
  );
}

export default SearchBox;
