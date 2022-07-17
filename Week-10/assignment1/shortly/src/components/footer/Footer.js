import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer_super_container">
        <div className="left_footer">
          <div>Shortly</div>
        </div>
        <div className="middle_footer">
          <ul>
            <li>
              <h3>Features</h3>
            </li>
            <li>Link Shortning</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
          <ul>
            <li>
              <h3>Resources</h3>
            </li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
          <ul>
            <li>
              <h3>Company</h3>
            </li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="right_footer">
          <ul>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
