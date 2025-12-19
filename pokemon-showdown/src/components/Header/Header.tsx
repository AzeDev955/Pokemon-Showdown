import React from "react";
import { Link } from "react-router-dom";
import icono from "../../assets/icono.png";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.container_header}>
      <>
        <Link to="/">
          <img src={icono} alt="logo pokemon showdown" className={styles.img} />
        </Link>
      </>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link to="/pokedex">Pokédex</Link>
          </li>
          <li>
            <Link to="/equipo">Crear equipo</Link>
          </li>
          <li>
            <Link to="/jugar">Jugar contra la maquina</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
