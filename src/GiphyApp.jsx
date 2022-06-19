import { useState } from "react";
import AddItem from "./components/AddItem";
import GifGrid from "./components/GifGrid";
import { v4 as uuidv4 } from 'uuid';

const GiphyApp = () => {

  const [categories, setCategory] = useState([]);

  const onAddCategory = ( newCategory ) => {

    if (categories.find(category => category.name === newCategory)) return;

    setCategory([
      {
        id: uuidv4(),
        name: newCategory
      },
      ...categories
    ]);

  };

  return (
    <>
      <h1 className="display-1 blue text-center">GiphyApp</h1>

      <AddItem onNewItem={ onAddCategory } />
      
      {
        categories.map(category => (
          <GifGrid key={ category.id } category={ category } />
        ))
      }
    </>
  );
};

export default GiphyApp;
