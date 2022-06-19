const getGifs = async (category) => {
  const { name } = category;
  const key = '0B0PGiIZ9D4lOXJ2bPvE9GAXMKI7hBfc';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${name}&limit=10`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized.url
  }));
  return gifs;
};

export { getGifs };