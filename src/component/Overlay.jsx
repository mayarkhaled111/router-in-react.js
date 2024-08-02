import React from 'react'

export default function Overlay({ imageSrc, onClose }){
    return (
        <div className="overlay" onClick={onClose}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <img src={imageSrc} alt="Overlay" />
            <button className="close-btn" onClick={onClose}>Close</button>
          </div>
        </div>
      );
};


