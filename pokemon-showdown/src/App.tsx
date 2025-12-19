import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Pokedex } from "./components/Pokedex/Pokedex";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/pokedex" element={<Pokedex />}></Route>
      </Routes>
      <Routes>
        <Route path="/equipo" element={<Header />}></Route>
      </Routes>
      <Routes>
        <Route path="/jugar" element={<Header />}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
