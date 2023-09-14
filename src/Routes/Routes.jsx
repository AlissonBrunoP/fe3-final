import React from "react";
import Home from "../Components/Home";
import Dentista from "../Components/Dentista";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/Dentista/:id/" element={<Dentista/>} />
        <Route path="/Favs" element= {<Favs/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
