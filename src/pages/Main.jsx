import React from 'react';
import WeatherPicture from '../components/layout/WeatherPicture';

function Main() {
  return (
    <main>
      <div className='main-container'>
        <div>
          <WeatherPicture />
        </div>
      </div>
    </main>
  );
}

export default Main;
