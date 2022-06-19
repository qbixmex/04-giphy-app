import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h2>{ category.name }</h2>
      <h3>{ counter }</h3>
      <button
        className="btn btn-primary"
        onClick={ () => setCounter(counter + 1) }
      >+1</button>
    </>
  );
};

export default GifGrid;
