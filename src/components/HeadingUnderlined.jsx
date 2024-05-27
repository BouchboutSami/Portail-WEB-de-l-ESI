import React from 'react';
import PropTypes from 'prop-types';

const HeadingUnderlined = ({ text }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <h1 className="font-poppins font-bold text-xl">{text}</h1>
      <div
        className="mt-1"
        style={{
          width: '100%',
          height: '3px',
          backgroundColor: '#185B9C'
        }}
      ></div>
    </div>
  );
};

HeadingUnderlined.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingUnderlined;
