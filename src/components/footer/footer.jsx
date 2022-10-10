import React from "react";
import "./footer.css";

import main_logo from "../../assets/icons/main_logo.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagramm from "../../assets/icons/instagramm.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer_logo">
          <img src={main_logo} alt="footer logo" />
        </div>
        <div className="about_block">
          <a href="#">About Us</a>
          <a href="#">Contacts</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="socials">
          <div>
            <a href="#">
              <img
                className="facebook_img"
                src={facebook}
                alt="facebook logo"
              />
              Facebook
            </a>
          </div>
          <div>
            <a href="#">
              <img src={twitter} alt="twitter logo" />
              Twitter
            </a>
          </div>
          <div>
            <a href="#">
              <img src={instagramm} alt="instagramm logo" />
              Instagramm
            </a>
          </div>
        </div>
        <div className="subscribe">
          <p>Subscribe to our newsletter</p>
          <div className="input_block">
            <input type="text" placeholder="Email adress" />
            <div className="submit_button_ok">OK</div>
          </div>
        </div>
        <div className="email_adress">
          <p>
            497 Evergreen Rd. Roseville, CA 95673 <br />
            +44 345 678 903 <br />
            adobexd@mail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
