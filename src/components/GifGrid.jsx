import useFetchGifs from "../hooks/useFetchGifs";
import GiphyItem from "./GiphyItem";
import Spinner from "./Spinner";

const GifGrid = ({ category }) => {

  const { gifs, isLoading } = useFetchGifs(category.name);

  return (
    <>
      <h2>{category.name}</h2>

    {
      isLoading ? <Spinner color='blue' />
      :
        <div className="row">
          {
            gifs.length > 0 && gifs.map(({ id, ...rest }) => (
              <GiphyItem key={id} {...rest} />
            ))
          }
        </div>
    }
    </>
  );
};

export default GifGrid;
