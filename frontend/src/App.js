/* eslint-disable arrow-parens */
/* eslint-disable max-len */
import { useState } from 'react';
import Header from './components/Header';
import Download from './components/Download';
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
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Preview selectedOptions={selectedOptions} />
        <div className="selection">
          <ButtonsList updateSelectedListItem={updateCategory} categories={categories} selected={selectedCategoryIndex} headerText="Accessorize your Alpaca" />
          <ButtonsList updateSelectedListItem={updateOption} categories={alpaca[categories[selectedCategoryIndex]]} selected={selectedOptionIndex} headerText={categories[selectedCategoryIndex]} />
        </div>

      </div>

      <Download />

    </div>
  );
}

export default App;
