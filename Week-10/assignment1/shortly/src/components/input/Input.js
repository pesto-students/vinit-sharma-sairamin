import PropTypes from "prop-types";
import _noop from "lodash/noop";
import "./input.css";

const Input = ({ inputUrl, onGetInputUrl }) => {
  return (
    <input
      value={inputUrl}
      type="text"
      placeholder="shorten a Link here..."
      onChange={onGetInputUrl}
    />
  );
};

Input.propTypes = {
  inputUrl: PropTypes.string,
  onGetInputUrl: PropTypes.func,
};

Input.defaultProps = {
  inputUrl: "",
  onGetInputUrl: _noop,
};

export default Input;
