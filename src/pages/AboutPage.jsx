import React from 'react';

function AboutPage() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Weather App</h1>
      <p className='mb-4 text-2xl font-light'>
        This App was created from scratch by Phil Greene.
      </p>
      <p>The purpose was to demonstrate working knowledge of React.</p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p>Perhaps one day I will come back to style it properly</p>
      <p>
        Future roadmap may include the ability to change weather picture
        dynamically based on the current weather
      </p>
    </>
  );
}

export default AboutPage;
