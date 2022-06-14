import PropTypes from "prop-types";
import _noop from "lodash/noop";
import "./input.css";

const Input = ({ inputItem, onEnterKey, onSetInputItem }) => {

  //getting todoitem from the input field
  function getInputFromTextBox(e) {
    onSetInputItem(e.target.value);
  }

  return (
    <input
      className="todoitem_input"
      onChange={getInputFromTextBox}
      onKeyPress={onEnterKey}
      placeholder="do you have any task?"
      type="text"
      value={inputItem}
    />
  );
};

Input.propTypes = {
  inputItem: PropTypes.string,
  onEnterKey: PropTypes.func,
  onSetInputItem: PropTypes.func,
};

Input.defualtProps = {
  inputItem: " ",
  onEnterKey: _noop,
  onSetInputItem: _noop,
};

export default Input;
