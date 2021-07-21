/* eslint-disable arrow-parens */
/* eslint-disable max-len */
import { useState } from 'react';
import Header from './components/Header';
import Download from './components/Download';
import Preview from './components/Preview';
import ButtonsList from './components/ButtonsList';
import alpaca from './alpaca';

function App() {
  console.log(alpaca);

  const categories = (Object.keys(alpaca));
  console.log(`Categories:${categories}`);
  let initSelectedOptions = {};
  categories.forEach(category => {
    initSelectedOptions = { ...initSelectedOptions, [category]: alpaca[category][0] };
  });

  console.log('selected option');
  console.table(initSelectedOptions);

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(initSelectedOptions);

  console.log(initSelectedOptions);
  console.log(`Selected category options ${categories[selectedCategoryIndex]} + option ${alpaca[categories[selectedCategoryIndex]]}`);

  function updateSelectedOptions() {
    const updated = { ...selectedOptions, selectedCategory: selectedOptions };
    setSelectedOptions(updated);
  }

  function updateCategory(newCategory) {
    const newIndex = categories.indexOf(newCategory);
    setSelectedCategoryIndex(newIndex);
  }

  function updateOption(newOption) {
    const options = alpaca[categories[selectedCategoryIndex]];
    const newIndex = options.indexOf(newOption); //
    setSelectedOptionIndex(newIndex);
    updateSelectedOptions();
  }
  console.log(categories);
  return (
    <div>
      <Header />
      <Preview />
      <Download />
      <ButtonsList updateSelectedListItem={updateCategory} categories={categories} selected={selectedCategoryIndex} headerText="Accessorize your Alpaca" />
      <ButtonsList updateSelectedListItem={updateOption} categories={alpaca[categories[selectedCategoryIndex]]} selected={selectedOptionIndex} headerText={categories[selectedCategoryIndex]} />
    </div>
  );
}

export default App;
