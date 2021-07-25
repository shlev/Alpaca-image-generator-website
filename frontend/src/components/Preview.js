/* eslint-disable no-param-reassign */
import React, { useRef, useEffect } from 'react';
// import ImagePart from './ImagePart';

function Preview(props) {
  const { selectedOptions, categories } = props;

  const canvasRef = useRef(null);

  let readyImages;

  function addImage(img) {
    return new Promise((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = reject;
    });
  }

  function drawAlpacaImages() {
    readyImages.forEach((img) => {
      const ctx = canvasRef.current.getContext('2d');
      ctx.drawImage(img, 0, 0, 400, 400);
    });
  }

  async function addToCanvas(folder, filename) {
    const src = `/alpaca/${folder}/${filename}.png`;
    console.log(canvasRef);
    const img = new Image();
    img.src = src;
    readyImages.push(img);
    await addImage(img);

    if (readyImages.length === categories.length) {
      drawAlpacaImages();
    }
  }

  function resetCanvas() {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, 400, 400);
  }

  function drawAlpaca() {
    resetCanvas();
    readyImages = [];
    categories.forEach((category) => addToCanvas(category, selectedOptions[category]));
  }

  useEffect(() => {
    drawAlpaca();
  });

  return (
    <div className="preview-container">
      <canvas ref={canvasRef} width={400} height={400} />
    </div>
  );
}

export default Preview;
