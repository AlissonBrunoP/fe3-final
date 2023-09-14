
import React, { useState } from "react";
import Header from './Components/Header'
import Home from './Components/Home'
function App() {
  const [changeMode, setChangeMode] = useState(false);

  const toggleMode = () => {
    setChangeMode(!changeMode);
  };

  return (
    <div className={changeMode ? "dark" : "light"}>
      <Header changeMode={changeMode} setChangeMode={setChangeMode} />
      <Home changeMode={changeMode} />
    </div>
  );
}

export default App;
