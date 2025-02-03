import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero/Hero";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
