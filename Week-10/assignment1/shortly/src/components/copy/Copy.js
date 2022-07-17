import PropTypes from "prop-types";
import Button from "../button";
import "./copy.css";

const Copy = ({ longUrl, shortenedUrl }) => {
  function copyToClipBoard() {
    navigator.clipboard.writeText(shortenedUrl);
    alert("Short URL is copied to the clipboard");
  }

  return (
    <div className="copy_super_container">
      <div className="copy_sub_container">
        <div className="copy_content_wraper">
          <div className="long_url">{longUrl ? longUrl : "Your Long URL"}</div>
          <div className="shorten_url">
            <span>{shortenedUrl ? shortenedUrl : "Short Url"}</span>
            <Button onClickButton={copyToClipBoard} buttonName="Copy" />
          </div>
        </div>
      </div>
    </div>
  );
};

Copy.propTypes = {
  longUrl: PropTypes.string,
  shortenedUrl: PropTypes.string,
};

Copy.defaultProps = {
  longUrl: "",
  shortenedUrl: "",
};

export default Copy;
