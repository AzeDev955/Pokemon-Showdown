import styles from "./Pokedex.module.scss";

export const Pokedex = () => {
  return (
    <div className={styles.pokedex_container}>
      <div className={styles.container_filter}>
        <label htmlFor="filter">Introduce aqui el nombre del pokemon</label>
        <input type="text" name="filter" id="filter" />
      </div>
      <div className={styles.container_pokemon}></div>
    </div>
  );
};
