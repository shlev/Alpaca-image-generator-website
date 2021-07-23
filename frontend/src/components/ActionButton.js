import React from 'react';

export default function ActionButton(props) {
  const { caption, performAction, iconClass } = props;

  function handleClick() {
    performAction();
  }
  return (
    <button onClick={handleClick} type="button" className="btn btn-lg">
      <i className={iconClass} />
      {caption}
    </button>
  );
}
