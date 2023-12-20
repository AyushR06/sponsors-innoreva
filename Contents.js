import React, { useState, useEffect } from 'react';
import './App.css';

const imageList = [
  { name: 'DETAILS:about the investors', url: './images/image 1.png' },
  { name: 'DETAILS:about the investors', url: '#' },
  { name: 'DETAILS:about the investors', url: '#' },
  { name: 'DETAILS:about the investors', url: '#' },
  { name: 'DETAILS:about the investors', url: '#' },
];

function Contents() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='main'>
      <div className='parent'>
        <div className='spons'>sponsors</div>
        <div className='heading'>
          <h1>innoreva</h1>
          <h1 className='invest'>investors</h1>
          <h4 className='state'>helping in the betterment</h4>
          <h5 className='state-2'>DONATE TOWARDS THE BETTERMENT&nbsp;<i className="ri-arrow-right-line"></i></h5>
        </div>
      </div>

      <div className="horizontal-slider">
        {imageList.map((image, index) => {
          const opacity = Math.abs(currentIndex - index) > 1 ? 0 : 1;
          const translateY = (index - currentIndex) * 100; // Adjust as needed

          return (
            <div
              key={index}
              className={`slider-item ${index === currentIndex ? 'active' : ''}`}
              style={{
                opacity,
                transform: `translateY(${translateY}%)`,
                transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                position: 'absolute',
              }}
            >
              <img src={image.url} />
              <div className="name">{image.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contents;
