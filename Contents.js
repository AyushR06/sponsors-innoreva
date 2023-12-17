import React, { useState, useEffect } from 'react';
import './App.css';

const imageList = [
  { name: 'DETAILS:about the investors', url: '#' },
  { name: 'DETAILS:about the investors', url: '#' },
  { name: 'DETAILS:about the investors', url: '#' },
];


function Contents(){
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {

      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);
  
  return(
      <contents className='main'>
        <div className='parent'>
          <div className='spons'>sponsors</div>
          <div className='heading'>
            <h1>innoreva</h1>
            <h1 className='invest'>investors</h1>
            <h4 className='state'>helping in the betterment</h4>
            <h5 className='state-2'>DONATE TOWARDS THE BETTERMENT&nbsp;<i class="ri-arrow-right-line"></i></h5>
          </div>
        </div> 

        <div className="vertical-slider">
      {imageList.map((image, index) => (
        <div key={index} className={`slider-item ${index === currentIndex ? 'active' : ''}`}>
          <img src={image.url} />
          <div className="name">{image.name}</div>
        </div>
      ))}
    </div>

        
        
      </contents>
  );
}

export default Contents;

