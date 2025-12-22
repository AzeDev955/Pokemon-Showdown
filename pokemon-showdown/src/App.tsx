import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Pokedex } from "./components/Pokedex/Pokedex";
import { PokemonDetails } from "./components/PokemonDetails/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/pokedex" element={<Pokedex />}></Route>
        <Route path="/pokedex/:name" element={<PokemonDetails />}></Route>
        <Route path="/equipo" element={<Header />}></Route>
        <Route path="/jugar" element={<Header />}></Route>
        <Route path="/login" element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
