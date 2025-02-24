import React, { useEffect } from 'react'
import Section1 from '../components/SponserspageComponents/Section1'
import Section2 from '../components/SponserspageComponents/Section2'


function Sponsers() {
     useEffect(() => {
          window.scrollTo(0, 0);
      }
      , []);
  return (
    <div className='w-full h-auto flex flex-col'>
        <Section1 />
        <Section2 />
    </div>
  )
}

export default Sponsers