import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import GiphyItem from "./GiphyItem";

const GifGrid = ({ category }) => {

  const [gifs, setGifs] = useState([]);

  const getData = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>{category.name}</h2>

      <div className="row">
      {
        gifs.length > 0 && gifs.map(({ id, ...rest }) => (
          <GiphyItem key={ id } { ...rest } />
        ))
      }
      </div>
    </>
  );
};

export default GifGrid;
