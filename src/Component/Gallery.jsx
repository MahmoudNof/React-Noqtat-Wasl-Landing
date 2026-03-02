import React from 'react'

const Gallery = ({ images }) => {
  return (
    <div className='gallery-grid'>
        {images.map((pic, index) => (
          <img key={index} src={pic} alt={`واقع المبادرة ${index + 1}`} className="grid-item"  />
        ))}
      </div>
  )
}

export default Gallery