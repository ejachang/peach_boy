import React from 'react';

const PeachImage = (props) => {
  const { peachImages } = props;

  return (
    <div>
      <img src={peachImages[0] }
        className='peachImage'/>
    </div>
  );
};

export default PeachImage;