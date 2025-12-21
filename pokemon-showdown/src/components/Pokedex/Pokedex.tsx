import styles from "./Pokedex.module.scss";
import pokemons from "../../data/pokemons.json";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Pokedex = () => {
  interface Pokemon {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }

  const [busqueda, setBusqueda] = useState("");

  //const [listaPokemon, setListaPokemon] = useState<Pokemon[]>([]);

  //const [cargando, setCargando] = useState(true);

  const pokemonFiltro = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(busqueda.toLowerCase());
  });

  const manejarInput = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(evento.target.value);
  };

  // useEffect(() => {
  //   const obtenerPokemons = async () => {
  //     const cache = localStorage.getItem("pokedex_data");
  //     if (cache) {
  //       setListaPokemon(JSON.parse(cache));
  //       setCargando(false);
  //       return;
  //     }
  //     try {
  //       const response = await fetch(
  //         "https://pokeapi.co/api/v2/pokemon?limit=1025"
  //       );
  //       const data = await response.json();

  //       const promesasDetalles = data.results.map(
  //         async (pokemonBasico: any) => {
  //           const resDetalle = await fetch(pokemonBasico.url);
  //           const dataDetalle = await resDetalle.json();

  //           return {
  //             id: dataDetalle.id,
  //             name: dataDetalle.name,
  //             types: dataDetalle.types.map((t: any) => t.type.name),
  //             sprite:
  //               dataDetalle.sprites.other["official-artwork"].front_default,
  //           };
  //         }
  //       );

  //       const detallesCompletos = await Promise.all(promesasDetalles);
  //       setListaPokemon(detallesCompletos);
  //       localStorage.setItem("pokedex_data", JSON.stringify(detallesCompletos));
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setCargando(false);
  //     }
  //   };
  //   obtenerPokemons();
  // }, []); //al parecer esto es que solo se ejecuta una vez, no se muy bien como funciona;

  return (
    <div className={styles.pokedex_container}>
      <>
        <div className={styles.container_filter}>
          <label htmlFor="filter">Introduce aquí el nombre del pokemon</label>
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
            <Link key={pokemon.id} to={`/pokedex/${pokemon.name}`}>
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprite}
                types={pokemon.types}
              />
            </Link>
          ))}
        </div>
      </>
    </div>
  );
};
