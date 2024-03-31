import React, { useState } from 'react';
//import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';

const ImgSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
       {images.map((image, index) => (
          <div key={index} className={`${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} data-carousel-item>
          <img src={image} alt={`Slide ${index + 1}`} className="absolute w-90 h-60 rounded-lg overflow-hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={` w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-bleu' : 'bg-gray-300'}`}
            aria-current={index === currentImageIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            data-carousel-slide-to={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;