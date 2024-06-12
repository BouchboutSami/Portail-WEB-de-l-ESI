import React from 'react';

const PhotoText = (props) => {
  const photos = props.photos;

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos ? photos.map((item, index) => (
          <div key={index} className="flex flex-col items-start mb-1">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto mb-1"
            />
            <p className="font-semibold mb-1 hover:underline m-4">
              {item.title}
            </p>
          </div>
        )) : null}
      </div>
    </div>
  );
};

export default PhotoText;

