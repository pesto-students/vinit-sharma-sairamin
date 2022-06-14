import _noop from "lodash/noop";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ onClickAddButton }) => {
  return (
    <button className="add_todoitem_button" onClick={onClickAddButton}>
      +
    </button>
  );
};

Button.propTypes = {
  onClickAddButton: PropTypes.func,
};

Button.defaultProps = {
  onClickAddButton: _noop,
};

export default Button;
