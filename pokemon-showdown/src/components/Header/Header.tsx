import React from "react";
import { Link } from "react-router-dom";
import icono from "../../assets/iconotransparente.png";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.container_header}>
      <div className={styles.logo_wrapper}>
        <Link to="/">
          <img src={icono} alt="logo pokemon showdown" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/pokedex">Pokédex</Link>
        <Link to="/equipo">Crear equipo</Link>
        <Link to="/jugar">Jugar contra la maquina</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};
