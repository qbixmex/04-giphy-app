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

  return (
    <>
      <h1 className="display-1 blue">GiphyApp</h1>

      <AddItem setItem={setCategory} />

      <ul>
        { categories.map((category, i) => (<li key={i}>{category}</li>)) }
      </ul>
    </>
  );
};

export default GiphyApp;
