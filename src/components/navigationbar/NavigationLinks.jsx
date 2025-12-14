import React from "react";

const NavigationLinks = () => {
  return (
    <div className="navigation-div">
      <ul>
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">PRODUCT</a>
        </li>
        <li>
          <a href="">SERVICE</a>
        </li>
        <li>
          <a href="">MEMBERS</a>
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
        <li>
          <a href="" className="signin-btn">
            SIGNIN
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
