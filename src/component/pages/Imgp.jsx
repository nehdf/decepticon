import React from 'react'
import {  dianna_guilianelli, erhrat_cockrin1, jaquelin_isch,Damaris_Kimura,Ibrahim_Frasch,
  Cathlene_Burrage,Andrew_Greene,Heather_Terry,Piers_Wilkins,
  Gordon_Sandesrson,Kimberly_Parsons,Richard_Astley,Rinaldo_Beynon,Waylon_Hyden,Giordano_Sagucio, Pakerjohnson, ronni_cantador, steven_mchail } from '../../assets/images'

import  { useState } from 'react';
const images = {
  0 : [steven_mchail, jaquelin_isch,dianna_guilianelli, ronni_cantador,erhrat_cockrin1,Pakerjohnson],
  1: [Damaris_Kimura,Ibrahim_Frasch,
    Cathlene_Burrage,Rinaldo_Beynon,Waylon_Hyden,Giordano_Sagucio],
  2: [Andrew_Greene, Heather_Terry,Piers_Wilkins,
    Gordon_Sandesrson,Kimberly_Parsons,Richard_Astley],
};

const ImageDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className=''>
        <button className='images'  tabIndex={0}  onClick={() => handleButtonClick(0) }>Opening Day</button>
        <h1 className='text-sky-800 text-3xl '>April 4</h1>
      </div>
      <div>
        <button tabIndex={1} onClick={() => handleButtonClick(1)}>Speaker & Worksxhops</button>
        <h1 className='text-sky-800 text-3xl ml-10'>April 5</h1>
      </div>
      <div>
        <button tabIndex={2} onClick={() => handleButtonClick(2)}>Interviews</button>
        <h1 className='text-sky-800 text-3xl '>April 6</h1>
      </div>
      
      {images[currentIndex].map((image, idx) => (
      <img className='flex' key={idx}  src={image} alt={`Image ${idx + 1}`} />
      ))}
      
    </div>
  );
};

export default ImageDisplay;


