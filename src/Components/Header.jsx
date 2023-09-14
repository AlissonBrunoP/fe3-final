import React from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import "./Header.css";

function Header(props) {
  const onClick = () => {
    if (props.setChangeMode) {
      props.setChangeMode(!props.changeMode);
    }
  };

  return (
    <header className={props.changeMode ? "headerDark" : "headerLight"}>
      <div>
        <h1 className="title">DH Odonto</h1>
      </div>

      <div>
        <button id="btnHome">Home</button>
        <button id="btnHome">Contact</button>
        <button id="btnHome">Favs</button>
        <button className="button" onClick={onClick}>
          <img src={props.changeMode ? sun : moon} alt="Logo" />
        </button>
      </div>
    </header>
  );
}

export default Header;
