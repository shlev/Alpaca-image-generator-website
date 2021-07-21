import React from 'react';

export default function ImagePart(props) {
  const { category, filename } = props;
  return (
    <img
      className="pos-abs"
      src={`/alpaca/${category}/${filename}.png`}
      alt={category}
    />
  );
}
