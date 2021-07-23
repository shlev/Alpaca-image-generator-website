import React from 'react';

export default function ButtonOption(props) {
  const { caption, selected: isActive, updateOption } = props;

  function handleClick() {
    updateOption(caption);
  }
  return (
    <button onClick={handleClick} className={`btn btn-md ${isActive ? 'btn-active' : ''}`} type="button">{caption}</button>
  );
}
