import React from 'react'
import './ImageGenerator.css'
import defaultImage from '../Assets/default_image.svg';



const ImageGenerator = () => {
  return (
    <div className='aiImageGenerator'>
      <div className="header">AI Image <span>Generator</span></div>
      <div className="imageLoading">
            <div className="image"><img src={defaultImage} alt="" /></div>
      </div>
    </div>
  )
}

export default ImageGenerator
