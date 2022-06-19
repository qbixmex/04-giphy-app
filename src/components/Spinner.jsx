import PropTypes from 'prop-types';

const colors = {
  blue: 'primary',
  gray: 'primary',
  cyan: 'info',
  green: 'success',
  yellow: 'warning',
  red: 'danger',
  light: 'light',
  dark: 'dark',
};

/**
 * Set a Spinner with bootstrap 5.1
 * @param {string} color Available Colors:
 * blue, gray, cyan, green, yellow, red, light, dark
 * @returns { JSX.Element }
 */
const Spinner = ({ color }) => {
  return (
    <div className={ `spinner-border text-${colors[color]}` } role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

Spinner.propTypes = {
  color: PropTypes.string,
};

Spinner.defaultProps = {
  color: 'dark',
};

export default Spinner;
