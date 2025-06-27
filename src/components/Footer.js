import React from "react";
function footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo-column">
            <a
              className="w-inline-block w--current"
              href="/"
              aria-current="page"
            >
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
                alt="Acme Outdoor Logo"
              />
            </a>
          </div>
          <div>
            <a
              className="social-footer-link w-inline-block"
              href="https://twitter.com/webflow"
              target="blank"
            >
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407a25b6234aeec960fb9_Twitter_Social_Icon_Rounded_Square_White.svg"
                style={{ width: 30 }}
                alt="Twitter-logo"
              />
            </a>
            <a
              className="social-footer-link w-inline-block"
              href="https://www.facebook.com/webflow"
              target="blank"
            >
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407aa3fb6cf5576f1658b_Facebook%20Logo.svg"
                style={{ width: 30 }}
                alt="Facebook Logo"
              />
            </a>
            <a
              className="social-footer-link w-inline-block"
              href="https://www.instagram.com/webflow/"
              target="blank"
            >
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e840774014326b74bbeeeb6_Insta.svg"
                style={{ width: 30 }}
                alt="Instagram logo"
              />
            </a>
          </div>
        </div>
        <div className="footer-bottom-wrapper">
          <div className="small footer-small">
            Made In&nbsp;
            <a href="https://webflow.com/" target="blank">
              Webflow
            </a>
            . © 2024.
          </div>
        </div>
      </div>
    </div>
  );
}
export default footer;
