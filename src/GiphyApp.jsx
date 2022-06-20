import { useState } from "react";
import AddItem from "./components/_AddItem";
import { GifGrid } from "./components";

const GiphyApp = () => {

  const [categories, setCategory] = useState([]);

  const onAddCategory = ( newCategory ) => {

    if (categories.find(category => category.name === newCategory)) return;

    setCategory([
      {
        id: new Date(),
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
