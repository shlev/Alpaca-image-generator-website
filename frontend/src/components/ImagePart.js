import React from 'react';

export default function ImagePart(props) {
  const { folder, filename } = props;
  return (
    <img
      className="pos-abs"
      src={`/alpaca/${folder}/${filename}.png`}
      alt={filename}
    />
  );
}
