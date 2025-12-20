import styles from "./Pokedex.module.scss";
import pokemons from "../../data/pokemons.json";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { useEffect, useState } from "react";

export const Pokedex = () => {
  const [busqueda, setBusqueda] = useState("");

  const [listaPokemon, setListaPokemon] = useState<PokemonCard[]>([]);

  const [cargando, setCargando] = useState(true);

  const pokemonFiltro = listaPokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(busqueda.toLowerCase());
  });

  const manejarInput = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(evento.target.value);
  };

  useEffect(() => {
    const obtenerPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const data = await response.json();

        const promesasDetalles = data.results.map(
          async (pokemonBasico: any) => {
            const resDetalle = await fetch(pokemonBasico.url);
            const dataDetalle = await resDetalle.json();

            return {
              id: dataDetalle.id,
              name: dataDetalle.name,
              types: dataDetalle.types.map((t: any) => t.type.name),
              sprite:
                dataDetalle.sprites.other["official-artwork"].front_default,
            };
          }
        );

        const detallesCompletos = await Promise.all(promesasDetalles);
        setListaPokemon(detallesCompletos);
      } catch (error) {
        console.error(error);
      } finally {
        setCargando(false);
      }
    };
    obtenerPokemons();
  }, []); //al parecer esto es que solo se ejecuta una vez, no se muy bien como funciona;

  return (
    <div className={styles.pokedex_container}>
      {cargando ? (
        <p>Cargando Pokédex...</p>
      ) : (
        <>
          {pokemonFiltro.map((pokemon) => (
            // AQUI USAMOS EL NUEVO COMPONENTE
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprite}
              types={pokemon.types}
            />
          ))}
        </>
      )}
    </div>
  );
};
