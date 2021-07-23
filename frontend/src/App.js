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

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(initSelectedOptions);

  function updateSelectedOptions(newOptionIndex) {
    const selectedCategory = categories[selectedCategoryIndex];
    const selectedOption = alpaca[selectedCategory][newOptionIndex];
    const updated = { ...selectedOptions, [selectedCategory]: selectedOption };
    setSelectedOptions(updated);
  }

  function updateCategory(newCategory) {
    const newIndex = categories.indexOf(newCategory);
    setSelectedCategoryIndex(newIndex);
  }

  function updateOption(newOption) {
    const options = alpaca[categories[selectedCategoryIndex]];
    const newOptionIndex = options.indexOf(newOption); //
    setSelectedOptionIndex(newOptionIndex);
    updateSelectedOptions(newOptionIndex);
  }

  function downloadImage() {
    alert('Download image');
  }

  function selectRandom() {
    const currentSelectedCategoryIndex = selectedCategoryIndex;
    categories.forEach((category, index) => {
      setSelectedCategoryIndex(index);
      const categoryOptionCount = alpaca[category].length;
      const rndOption = Math.floor(Math.random() * categoryOptionCount);
      updateOption(alpaca[category][rndOption]);
    });
    setSelectedCategoryIndex(currentSelectedCategoryIndex);
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
          <ButtonsList updateSelectedListItem={updateCategory} categories={categories} selected={selectedCategoryIndex} headerText="Accessorize your Alpaca" />
          <ButtonsList updateSelectedListItem={updateOption} categories={alpaca[categories[selectedCategoryIndex]]} selected={selectedOptionIndex} headerText={categories[selectedCategoryIndex]} />
        </div>

      </div>

    </div>
  );
}

export default App;
