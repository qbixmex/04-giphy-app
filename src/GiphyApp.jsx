import { useState } from "react";
import AddItem from "./components/AddItem";

const key = '0B0PGiIZ9D4lOXJ2bPvE9GAXMKI7hBfc';

const GiphyApp = () => {

  const initialState = [
    { id: 1, name: 'Dragon Ball Super' },
    { id: 2, name: 'Demon Slayer' },
    { id: 3, name: 'Shingeki no kyojin' },
  ];
  
  const [categories, setCategory] = useState(initialState);

  const onAddCategory = ( newCategory ) => {
    if (categories.find(category => category.name === newCategory)) return;

    setCategory([
      {
        id: categories.length + 1,
        name: newCategory
      },
      ...categories
    ]);

  };

  return (
    <>
      <h1 className="display-1 blue">GiphyApp</h1>

      <AddItem onNewItem={ onAddCategory } />

      <ul>
        {
          categories.map(({ id, name }) => (
            <li key={id}>{ name }</li>
          ))
        }
      </ul>
    </>
  );
};

export default GiphyApp;
