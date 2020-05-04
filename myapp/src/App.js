import React from 'react';

import './App.css';
import Welcome from './Welcome';
import Employee from './Employee';
import Login from './Login';

function App() {
  return (
    <div style={{backgroundColor: '#61DBFB'}} className="App">
     
      <Welcome/>
      <Login/>
      <Employee/>
    </div>
  );
}

export default App;
