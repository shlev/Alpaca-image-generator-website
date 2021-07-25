/* eslint-disable no-alert */
/* eslint-disable arrow-parens */
/* eslint-disable max-len */
import { useState } from 'react';
import Header from './components/Header';
import ActionButton from './components/ActionButton';
import Preview from './components/Preview';
import ButtonsList from './components/ButtonsList';
import alpaca from './alpaca';

function App() {
  const categories = (Object.keys(alpaca));
  let initSelectedOptions = {};
  categories.forEach(category => {
    initSelectedOptions = { ...initSelectedOptions, [category]: alpaca[category][0] };
  });

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedOptions, setSelectedOptions] = useState(initSelectedOptions);

  function updateSelectedOptions(updatedOption) {
    const updated = { ...selectedOptions, [selectedCategory]: updatedOption };
    setSelectedOptions(updated);
  }

  function updateCategory(newCategory) {
    setSelectedCategory(newCategory);
  }

  function updateOption(updatedOption) {
    updateSelectedOptions(updatedOption);
  }

  function downloadImage() {
    alert('Download image');
  }

  function selectRandom() {
    alert('select random');
  }
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div>
          <Preview selectedOptions={selectedOptions} />
          <div className="command-buttons">
            <ActionButton performAction={selectRandom} caption="random" iconClass="fas fa-random" />
            <ActionButton performAction={downloadImage} caption="download" iconClass="far fa-save" />
          </div>
        </div>

        <div className="selection">
          <ButtonsList updateSelectedListItem={updateCategory} categories={categories} selected={selectedCategory} headerText="Accessorize your Alpaca" />
          <ButtonsList updateSelectedListItem={updateOption} categories={alpaca[selectedCategory]} selected={selectedOptions[selectedCategory]} headerText={selectedCategory} />
        </div>

      </div>

    </div>
  );
}

export default App;
