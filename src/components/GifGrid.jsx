const gifs = [
  { id: 1, url: 'https://giphy.com/123' },
  { id: 2, url: 'https://giphy.com/456' },
  { id: 3, url: 'https://giphy.com/789' },
  { id: 4, url: 'https://giphy.com/101112' },
];

const GifGrid = ({ category }) => {
  const { name } = category;
  return (
    <>
      {
        gifs.map(gif => {
          return (
            <div key={gif.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card mb-4">
                <div className="card-body">
                  <div
                    style={{
                      backgroundColor: '#868e96',
                      color: "#fff",
                      width: "100%",
                      height: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    className="bd-placeholder-img card-img-top"
                  >
                    {gif.url}
                  </div>
                </div>
                <div className="card-footer">
                  <p className="mb-0 fw-bold">
                    {name}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      }
    </>
  );
};

export default GifGrid;
