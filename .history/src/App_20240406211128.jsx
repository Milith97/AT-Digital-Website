// App.js or your main component file
import React from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Servicers from './Components/Servicers'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Servicers/>
    </div>
  );
}

export default App;
