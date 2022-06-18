import { useState } from "react";

const AddItem = ({ setItem }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onAddItem = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 2) return;
    setItem(items => [ ...items, inputValue ]);
    setInputValue('');
  };

  return (
    <form onSubmit={ onAddItem }>
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
