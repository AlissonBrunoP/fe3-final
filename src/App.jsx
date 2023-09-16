
import React, { useState } from "react";
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from "./Components/Footer";

function App() {
  const [changeMode, setChangeMode] = useState(false);

  const toggleMode = () => {
    setChangeMode(!changeMode);
  };

  return (
    <div className={changeMode ? "dark" : "light"}>
      <Header changeMode={changeMode} setChangeMode={setChangeMode} />
      <Home changeMode={changeMode} />
      <Footer />
    </div>
  );
}

export default App;
