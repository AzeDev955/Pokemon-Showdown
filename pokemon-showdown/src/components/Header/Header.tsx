import React from "react";
import {Link} from "react-router-dom";
import icono from "../../assets/icono2.png";
import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header_base}>
      <img src={icono} alt="Icono" className={styles.img} />
       <nav aria-label="Navegación principal" className={styles.nav}>
        <ul className={styles.menu}>
            <li><Link to="/">Principal</Link></li>
            <li><Link to="/team">Mi Equipo</Link></li>
            <li><Link to="/battle">Combate vs IA</Link></li>
            <li><Link to="/login">Login/Registro</Link></li>
        </ul>
      </nav>
    </header>
  );
};
