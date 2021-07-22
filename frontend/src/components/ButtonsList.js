import React from 'react';
import ButtonOption from './ButtonOption';

export default function ButtonsList(props) {
  const {
    categories,
    selected,
    headerText,
    updateSelectedListItem,
  } = props;
  const selectedCategory = categories[selected];

  function updateList(category) {
    updateSelectedListItem(category);
  }
  return (
    <div>
      <h1>{headerText}</h1>
      <div className="btn-container">
        {categories.map((cat) => (
          // eslint-disable-next-line max-len
          <ButtonOption
            key={cat}
            caption={cat}
            selected={cat === selectedCategory}
            updateOption={updateList}
          />
        ))}
      </div>
    </div>
  );
}
