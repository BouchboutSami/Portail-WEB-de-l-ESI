import React from 'react';
import '../styles/ImageWithRectangle.css'; // Assuming you have CSS for styling

const ImageWithRectangle = ({ imageUrl }) => {
  return (
    <div className="image-with-rectangle">
      <img src={imageUrl} alt="Image" />
      <div className="rectangle h-[600px]"></div>
    </div>
  );
};

export default ImageWithRectangle;
