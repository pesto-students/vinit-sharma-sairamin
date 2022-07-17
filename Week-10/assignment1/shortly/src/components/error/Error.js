import PropTypes from "prop-types";
import _noop from "lodash/noop";
import "./error.css";

const Error = ({ onErrorMessage, onSetErrorMassege }) => {
  var universal;

  function unsetPopUp() {
    onSetErrorMassege("");
    clearTimeout(universal);
  }

  if (onErrorMessage) {
    universal = setTimeout(() => {
      unsetPopUp();
    }, 4000);
  }

  return (
    <div className="error_container">
      <div>{onErrorMessage}</div>
      <div onClick={unsetPopUp}>X</div>
    </div>
  );
};

Error.propTypes = {
  onErrorMessage: PropTypes.string,
  onSetErrorMassege: PropTypes.func,
};

Error.defaultProps = {
  onErrorMessage: "",
  onSetErrorMassege: _noop,
};

export default Error;
