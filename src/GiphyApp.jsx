import { useState } from "react";
import AddItem from "./components/AddItem";
import GifGrid from "./components/GifGrid";

const GiphyApp = () => {

  const initialState = [];
  
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

{/* <li key={id}>{ name }</li> */}

export default GiphyApp;
