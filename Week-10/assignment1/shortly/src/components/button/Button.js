import PropTypes from "prop-types";
import _noop from "lodash/noop";
import "./button.css";

const Button = ({ buttonName, onClickButton }) => {
  return <button onClick={() => onClickButton()}>{buttonName}</button>;
};

Button.propTypes = {
  buttonName: PropTypes.string,
  onClickButton: PropTypes.func,
};

Button.defaultProps = {
  buttonName: "",
  onClickButton: _noop,
};

export default Button;
