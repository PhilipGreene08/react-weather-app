import rain from './assets/rain.jpg';
import CordinateSearch from './CordinateSearch';

function WeatherPicture() {
  return (
    <div className='picture-container'>
      <div className='hero-image'>
        <div className='hero-text'>
          <CordinateSearch />
        </div>
      </div>
    </div>
  );
}

export default WeatherPicture;
