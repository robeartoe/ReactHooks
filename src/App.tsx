/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './App.css';
import useDimensions from './util/useDimensions';

function App() {
  const [renders, setRenders] = useState<number>(0);
  const {height, width}  = useDimensions();

  useEffect(() => {
    setRenders(renders + 1);
  }, [height, width])

  return (
    <div className="App">
      <header className="App-header">
          Windows Dimensions has changed!
          <br/>
          <code>{height} x {width}</code>
          <br/>
          <code>{renders} Re-Renders</code>
      </header>
    </div>
  );
}

export default App;
