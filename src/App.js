import React from 'react';
import './App.css';
import memesData from './components/meme/memesData';

import { Header, Meme } from './components/App';

function App() {
  // const memeElements = memesData.map(item => {
  //   return (
  //     <Meme 
  //     {...item}
  //     {...item.data.memes}
  //     />
  //   )
  // })

  
  
  return (
    <div className='container'> 
      <Header />
      <Meme/>
      {/* <section>
        {memeElements}
      </section> */}
    </div>
  );
}

export default App;