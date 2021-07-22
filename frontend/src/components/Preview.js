import React from 'react';
import ImagePart from './ImagePart';

function Preview(props) {
  const { selectedOptions } = props;
  return (
    <div className="preview-container">
      {Object.keys(selectedOptions).map((option) => (
        <ImagePart key={option} folder={option} filename={selectedOptions[option]} />
      ))}
    </div>
  );
}

export default Preview;
