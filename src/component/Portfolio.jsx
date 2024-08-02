import React, { useState } from 'react'
import port1 from '../assets/port1.png'
import port2 from '../assets/port2.png'
import port3 from '../assets/port3.png'
import Overlay from './Overlay';

export default function Portfolio() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  function handleImageClick (imageSrc){
    setSelectedImage(imageSrc);
    setIsOverlayOpen(true);
  }

  function closeOverlay (){
    setIsOverlayOpen(false);
    setSelectedImage('');
  }

  return (
    <div className="portfolio py-10">
      <div className="container">
        <h1 className='text-center'>PORTFOLIO COMPONENT</h1>
        <div className='shape m-auto flex justify-center items-center my-3'>
          <div className='h-1 w-20'></div>
          <i className="fa-solid fa-star mx-4"></i>
          <div className='h-1 w-20'></div>
        </div>
        <div className="port w-full flex flex-wrap">
          {[port1, port2, port3, port1, port2, port3].map((port, index) => (
            <div className="w-1/3 p-4" key={index} onClick={() => handleImageClick(port)}>
              <div className='image relative '>
                <div className="layout absolute flex justify-center items-center rounded-lg top-0 left-0 h-full w-full">
                  <i className="fa-solid fa-plus fa-6x" style={{ color: '#ffffff' }} />
                </div>
                <img src={port} alt="" className='rounded-lg' />
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOverlayOpen && (
        <Overlay imageSrc={selectedImage} onClose={closeOverlay} />
      )}
    </div>
  )
}
