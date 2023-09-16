import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import Dentist from "../Components/Dentist";
import Favs from "../Components/Favs";

const RoutesConfig = ({ changeMode }) => {
  return (
    <Routes>
      <Route path="/" element={<Home changeMode={changeMode} />} />
      <Route path="/Contact" element={<Contact changeMode={changeMode} />} />
      <Route path="/Dentista/:id" element={<Dentist changeMode={changeMode} />} />
      <Route path="/Favs" element={<Favs changeMode={changeMode} />} />
    </Routes>
  );
};

export default RoutesConfig;
