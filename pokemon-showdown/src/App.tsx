import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/"/>
            <Route path="/team" element={<Header/>}/>
            <Route path="/battle" element={<Header/>}/>
            <Route path="/login" element={<Header/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
