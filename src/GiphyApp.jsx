import { useState } from "react";

const key = '0B0PGiIZ9D4lOXJ2bPvE9GAXMKI7hBfc';

const GiphyApp = () => {

  const initialState = [
    'Dragon Ball Super',
    'Demon Slayer',
    'Shingeki no kyojin'
  ];

  const [categories, setCategories] = useState(initialState);

  return (
    <>
      <h1>GiphyApp</h1>

      <input type="text" />

      <ul>
        { categories.map((category, i) => (<li key={i}>{category}</li>)) }
      </ul>
    </>
  );
};

export default GiphyApp;
