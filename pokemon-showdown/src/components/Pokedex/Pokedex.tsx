import styles from "./Pokedex.module.scss";
import pokemons from "../../data/pokemons.json";
import { useState } from "react";

export const Pokedex = () => {
  const [busqueda, setBusqueda] = useState("");

  const pokemonFiltro = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(busqueda.toLowerCase());
  });

  const manejarInput = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(evento.target.value);
  };

  return (
    <div className={styles.pokedex_container}>
      <div className={styles.container_filter}>
        <label htmlFor="filter">Introduce aqui el nombre del pokemon</label>
        <input
          type="text"
          name="filter"
          id="filter"
          value={busqueda}
          onChange={manejarInput}
          placeholder="Nombre del pokemon..."
        />
      </div>
      <div className={styles.container_pokemon}>
        {pokemonFiltro.map((pokemon) => (
          //div temporal hasta hacer componente pokemon
          <div key={pokemon.id} className={styles.pokemon_card}>
            <img src={pokemon.sprite} alt={pokemon.name} width={100} />
            <p>
              {pokemon.id} {pokemon.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
