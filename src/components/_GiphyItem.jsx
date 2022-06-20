import PropTypes from 'prop-types';

const GiphyItem = ({ url, title }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-lg-4">
      <div className="card mb-4">
        <img id="giphy-img" src={url} className="card-img-top" alt={title} />
        <div className="card-footer">
          <p id="footer" className="mb-0 fw-bold">{title}</p>
        </div>
      </div>
    </div>
  );
};

GiphyItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GiphyItem;
