import React from 'react';
import logo from './logo.svg';
import './App.css';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function App() {

  const [state, setState] = React.useState({
    test: false,
  });

  return (
    <div className="App">
      <header className="App-header">

        <p>coding challenge</p>          
        
      </header>
      <body>
        <FormControlLabel 
            label="test"
            labelPlacement='start'
            control={
              <Switch checked={state.test} 
                onChange={e => setState({...state, test: e.target.checked})}
                name="test"
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            }/>
      </body>
    </div>
  );
}

export default App;
