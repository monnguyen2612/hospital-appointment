import React from "react";
import "./index.css";

const RadioButtonComponent = ({ name, path }) => {
  return (
    <div className="radio-button-container">
      <a class="uk-button-primary" href={path}>
        <span class="ant-radio-button">
          <input
            type="radio"
            class="ant-radio-button-input"
            value="Cannington"
          />
          <span class="ant-radio-button-inner"></span>
        </span>
        <span>
          <div class="radioBtnText">{name}</div>
        </span>
      </a>
    </div>
  );
};

export default RadioButtonComponent;
