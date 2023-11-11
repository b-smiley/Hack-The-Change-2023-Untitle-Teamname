// app.js

import React from 'react';
import './App.css'

const zoneStyle = {
  width: '100%',
  minHeight: '30vh',
  position: 'relative',
};
const App = () => {
  return(
    <div className = 'App'>
      <div className = 'header'>
        <h1>Farmville</h1>
      </div>
      <div className="zone zone1" style={zoneStyle}>
        <div className="blend-overlay"></div>
      </div>
      <div className="zone zone2" style={zoneStyle}>
        <div className="blend-overlay"></div>
      </div>
    </div>
  );
};

export default App;