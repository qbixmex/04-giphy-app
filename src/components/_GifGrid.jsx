import PropTypes from "prop-types";
import useFetchGifs from "../hooks/useFetchGifs";
import { GiphyItem, Spinner } from "./";

const GifGrid = ({ category }) => {

  const { gifs, isLoading } = useFetchGifs(category.name);

  return (
    <>
      <h2>{category.name}</h2>

      { isLoading && <Spinner color='blue' /> }

      <div className="row">
        {
          gifs.length > 0 && gifs.map(({ id, ...rest }) => (
            <GiphyItem key={id} {...rest} />
          ))
        }
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.object.isRequired,
};

export default GifGrid;
