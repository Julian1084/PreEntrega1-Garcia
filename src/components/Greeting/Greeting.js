import React from "react";
import "./Greeting";
import img from "./logo.png";

const Header = (props) => {
  // console.log(props);
  return (
    <div className="Header">
      <img className= "logo" src={img} alt="logo" />
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
};

export default Header;
