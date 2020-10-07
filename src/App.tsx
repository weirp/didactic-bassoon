import React from 'react';
import './App.css';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { doSearch } from "./service/search-service";



function App() {

  const [state, setState] = React.useState({
    text: "",
    subtext: "",
    multipleMatches: true,
    caseSensitive: false,
    searchResult: "",
  });





  
  function runSearch() {
    setState({...state, 
      searchResult: doSearch( state.text, state.subtext, state.caseSensitive, state.multipleMatches)
                  .join(",")});
  }

  return (
    <div className="App">
      <header className="App-header">

        <p>coding challenge</p>          
        
      </header>
      
      <Box className="search-text-body" >

        <TextField 
          className="search-text-string"     
          style={{marginTop: 12}}     
          id="text"
          label="Text to search"
          variant="filled"
          value={state.text}
          onChange={e => setState({...state, text: e.target.value})}/>

        <TextField 
          className="search-text-string"
          style={{marginTop: 12}}     
          id="subtext"
          label="Search for"
          variant="filled"
          value={state.subtext}
          onChange={e => setState({...state, subtext: e.target.value})}/>

        <Box style={{flexDirection: "row", alignSelf: "stretch"}}>
          <FormControlLabel 
              label="Case Sensitive" 
              labelPlacement='start'
              control={
                <Switch checked={state.caseSensitive} 
                  onChange={e => setState({...state, caseSensitive: e.target.checked})}
                  name="caseSensitive"
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            }/>
        </Box>

        <Box style={{flexDirection: "row", alignSelf: "stretch"}}>
          <FormControlLabel 
              label="Multiple matches" 
              labelPlacement='start'
              control={
                <Switch checked={state.multipleMatches} 
                  onChange={e => setState({...state, multipleMatches: e.target.checked})}
                  name="multipleMatches"
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
              }/>
        </Box>
        
        <Box style={{flexDirection: "row", alignSelf: "stretch"}}>
          <Button title="Search Button" variant="contained" onClick={runSearch}>Search</Button>
        </Box>
        
        <Box style={{flexDirection: "row", alignSelf: "stretch", marginTop: 12}}>
          <div>{state.searchResult}</div>
        </Box>

      </Box>
      </div>
    
  );
}

export default App;
