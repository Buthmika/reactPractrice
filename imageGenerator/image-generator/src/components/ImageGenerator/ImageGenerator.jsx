import React from 'react'
import './ImageGenerator.css'
import defaultImage from '../Assets/default_image.svg';



const ImageGenerator = () => {
  return (
    <div className='aiImageGenerator'>
      <div className="hea">Ai Image <span>Generator</span></div>
      <div className="imgLoading">
            <div className="image"><img src={defaultImage} alt="" /></div>
      </div>
    </div>
  )
}

export default ImageGenerator
