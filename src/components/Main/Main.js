import React from 'react';
import './Main.css';

import wolf from '../../img/full_wolf_moon.jpg';



const Main = () => {
  return (
    <main className={'main'}>
      <div className={'images'}>
        <div>
          <img src={wolf} />
        </div>
      </div>
      <div className={'content'}>
      </div>
    </main>
  )
}



export default Main;
