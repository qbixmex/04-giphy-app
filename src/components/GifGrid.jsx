import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {

  const [gifs, setGifs] = useState([]);

  const getData = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>

      <h2>{category.name}</h2>

      <ul className="list-group">
      {
        gifs.map(({ id, title }) => (
          <li key={ id } className="list-group-item">
            { title }
          </li>
        ))
        }
      </ul>

    </>
  );
};

export default GifGrid;
