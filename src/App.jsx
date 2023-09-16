import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import RoutesConfig from './Routes/Routes'; 

function App() {
  const [changeMode, setChangeMode] = useState(false);

  const toggleMode = () => {
    setChangeMode(!changeMode);
  };

  return (
    <div className={changeMode ? "dark" : "light"}>
      <BrowserRouter>
        <Header changeMode={changeMode} setChangeMode={setChangeMode} />
        <RoutesConfig changeMode={changeMode} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
