const GiphyItem = ({ url, title }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-lg-4">
      <div className="card mb-4">
        <img src={url} className="card-img-top" alt={title} />
        <div className="card-footer">
          <p className="mb-0 fw-bold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default GiphyItem;
