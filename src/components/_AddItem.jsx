import { useState } from "react";
import PropTypes from 'prop-types';

const AddItem = ({ onNewItem }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value.length <= 2) return;
    onNewItem(value);
    setInputValue('');
  };

  return (

    <form aria-label="form" onSubmit={onSubmit}>
      <div className="row mt-4 mb-4 g-2 justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <input
            className="form-control"
            type="text"
            onChange={onInputChange}
            value={inputValue}
            placeholder='Search Gifs'
          />
        </div>
        <div className="d-grid col-12 col-md-auto">
          <button
            type="submit"
            className="btn btn-primary d-inline"
            disabled={(inputValue.trim().length <= 2) && true}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

AddItem.propTypes = {
  onNewItem: PropTypes.func.isRequired,
};

export default AddItem;
