import React from 'react';

function CordinateSearch() {
  return (
    <div>
      <form className='search-form'>
        <label htmlFor=''>
          <input type='number' placeholder='Enter Longitude' />
        </label>
        <label htmlFor=''>
          <input type='number' placeholder='Enter Latitude' />
        </label>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default CordinateSearch;
