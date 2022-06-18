import { useState } from "react";

const AddItem = ({ onNewItem }) => {

  const [ inputValue, setInputValue ] = useState('');

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
    <form onSubmit={ onSubmit }>
      <input
        className="form-control mt-4 mb-2"
        type="text"
        onChange={onInputChange}
        value={inputValue}
        placeholder='Search Gifs'
      />
      <div className="d-grid mb-3">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={ ( inputValue.trim().length <= 2 ) && true }
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddItem;
