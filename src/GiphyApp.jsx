import { useState } from "react";

const key = '0B0PGiIZ9D4lOXJ2bPvE9GAXMKI7hBfc';

const GiphyApp = () => {

  const initialState = [
    'Dragon Ball Super',
    'Demon Slayer',
    'Shingeki no kyojin'
  ];

  const [input, setInput] = useState('');
  const [categories, setCategory] = useState(initialState);

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onAddCategory = (event) => {
    event.preventDefault();
    if(input) {
      setCategory([ ...categories, input ]);
      setInput('');
    }
  };

  return (
    <>
      <h1 className="display-1 blue">GiphyApp</h1>

      <form onSubmit={ onAddCategory }>
        <input
          className="form-control mt-4 mb-2"
          type="text"
          onChange={onInputChange}
          value={input}
        />
        <div className="d-grid mb-3">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={ !input && true }
          >
            Add
          </button>
        </div>
      </form>

      <ul>
        { categories.map((category, i) => (<li key={i}>{category}</li>)) }
      </ul>
    </>
  );
};

export default GiphyApp;
