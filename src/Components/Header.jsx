import React from "react";
import moon from "../images/icon-moon.jpg";
import sun from "../images/icon-sun.jpg";
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
        <h1 className="title"><span>D</span>H Odonto</h1>
      </div>

      <div id="menuHeader">
        <button id="btnHome" className="btnHeader">Home</button>
        <button id="btnContact" className="btnHeader">Contact</button>
        <button id="btnFavs" className="btnHeader">Favs</button>
        <button  className="btnH" onClick={onClick}>
          <img src={props.changeMode ? sun : moon} alt="Logo" />
        </button>
      </div>
    </header>
  );
}

export default Header;
