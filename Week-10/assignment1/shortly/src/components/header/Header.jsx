import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  var current = useLocation();

  var highlightHome, highlightFeature, highlightResources, highlightPricing;

  //highlighting the nav link
  if (current.pathname === "/") {
    highlightHome = "active";
    highlightFeature = "";
    highlightResources = "";
    highlightPricing = "";
  } else if (current.pathname === "/feature") {
    highlightHome = "";
    highlightFeature = "active";
    highlightResources = "";
    highlightPricing = "";
  } else if (current.pathname === "/resources") {
    highlightHome = "";
    highlightFeature = "";
    highlightResources = "active";
    highlightPricing = "";
  } else if (current.pathname === "/pricing") {
    highlightHome = "";
    highlightFeature = "";
    highlightResources = "";
    highlightPricing = "active";
  }

  return (
    <>
      <nav className="nav_super_container">
        <div className="left_nav">
          <span>Shortly</span>
        </div>
        <div className="middle_nav">
          <ul className="nav_menu_ul">
            <li>
              <Link className={`header_link_tag ${highlightHome}`} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`header_link_tag ${highlightFeature}`}
                to="/feature"
              >
                Feature
              </Link>
            </li>
            <li>
              <Link
                className={`header_link_tag ${highlightResources}`}
                to="/resources"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                className={`header_link_tag ${highlightPricing}`}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="right_nav">
          <ul className="right_nav_ul">
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
