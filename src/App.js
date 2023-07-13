import React from 'react';
import './App.css';

import { Header, Meme } from './components/App';

function App() {
  return (
    <div className='container'> 
      <Header />
      <Meme/>
    </div>
  );
}

export default App;