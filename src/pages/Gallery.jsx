import React from 'react'
import Section1 from '../components/GallerypageComponents/Section1';
import Section2 from '../components/GallerypageComponents/Section2';
import Section3 from '../components/GallerypageComponents/Section3';

function Gallery() {
  return (
    <div className='w-full h-auto flex flex-col '>
      <Section1 />
      <Section2 />
      <Section3 />

    </div>
  )
}

export default Gallery