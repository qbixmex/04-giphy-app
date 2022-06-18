import { useState } from "react";
import AddItem from "./components/AddItem";

const key = '0B0PGiIZ9D4lOXJ2bPvE9GAXMKI7hBfc';

const GiphyApp = () => {

  const initialState = [
    'Dragon Ball Super',
    'Demon Slayer',
    'Shingeki no kyojin'
  ];
  
  const [categories, setCategory] = useState(initialState);

  const onAddCategory = ( newCategory ) => {

    // ShortHand
    // setCategory([ newCategory, ...categories ]);

    // With hook callback
    setCategory((previousCategories) => {
      return [
        newCategory,
        ...previousCategories
      ]
    });

  };

  return (
    <>
      <h1 className="display-1 blue">GiphyApp</h1>

      <AddItem onNewItem={ onAddCategory } />

      <ul>
        { categories.map((category, i) => (<li key={i}>{category}</li>)) }
      </ul>
    </>
  );
};

export default GiphyApp;
