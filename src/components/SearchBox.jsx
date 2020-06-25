import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import './SearchBox.css';

const filter = createFilterOptions();

function SearchBox() {
  // return (
  //   <div>
  //      <h1> Search here! </h1>
  //      <div>
  //        {/* <input type="text" placeholder="Search..." /> */}
  //        <TextField id="filled-basic" className="input-field" label="Search song ... " variant="filled" />
  //        <Search ></Search>
  //      </div>
  //   </div>
  // );
  const [value, setValue] = React.useState(null);

  return (
    <div className="search-box">
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
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
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          // Suggest the creation of a new value
          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={songs}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(option) => option.title}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Search your song..." variant="outlined" />
        )}
      />
    </div>
  );
}
const songs = [
  { title: 'Colors - Michael Shaw', year: 1994 },
  { title: 'Loce and Hate - M.M', year: 1994 },
];

export default SearchBox;
