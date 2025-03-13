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
      <div className="searchBox">
            <input type="text" className='searchInput' placeholder='Describe what you want'/ >
            <div className="generateButton">Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator
