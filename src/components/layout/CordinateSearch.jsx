import React from 'react';
import { useState } from 'react';
import { searchWeather } from '../../context/WeatherActions';

function CordinateSearch() {
  //coordinates are a single state. setCoordinates uses latitude and longitude for values
  const [coordinates, setCoordinates] = useState({
    latitude: '',
    longitude: '',
  });

  //handle change is fired off whenever a new number is entered into our cordinate form
  //We take the existing state of ...cordinates, then based on the target name, we set a new value
  //as determined by target value. NOTE: IDK why we need [] for target name
  const handleChange = (e) => {
    console.log(e);
    setCoordinates({ ...coordinates, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (coordinates === '') {
      console.log(`enter coordinates`);
    } else {
      await searchWeather(coordinates.latitude, coordinates.longitude);
    }
  };

  return (
    <div>
      <form className='search-form form-control' onSubmit={handleSubmit}>
        <input
          type='number'
          name='longitude'
          placeholder='Enter Longitude'
          step='0.01'
          onChange={handleChange}
        />
        <input
          type='number'
          name='latitude'
          placeholder='Enter Latitude'
          step='0.01'
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default CordinateSearch;
