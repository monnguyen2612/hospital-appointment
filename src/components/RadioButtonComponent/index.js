import React,{useState} from "react";
import "./index.css";

const RadioButtonComponent = ({ name, path }) => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <div className="radio-button-container"  onClick={()=> setIsSelected(!isSelected)}>
      <a className={`uk-button-primary ${isSelected?"uk-button-primary-selected":""}`} href={path}>
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
