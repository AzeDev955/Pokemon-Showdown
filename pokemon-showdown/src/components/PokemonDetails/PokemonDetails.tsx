import { useParams, useNavigate } from "react-router-dom";
import pokemons from "../../data/pokemons.json";
import styles from "./PokemonDetails.module.scss";

const maxBaseStat = 255;
interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  sp_attack: number;
  sp_defense: number;
  speed: number;
}
export const PokemonDetails = () => {
  const { name } = useParams(); //lee el parametro y de ahi saca el nombre;
  const navigate = useNavigate(); //sirve para navegar en SPA tambien, los Link son mas chulos

  const pokemon = pokemons.find((p) => {
    return p.name.toLowerCase() === name?.toLowerCase();
  });
  const calcularPesoAltura = (medida: number) => {
    return medida / 10;
  };
  if (!pokemon) {
    return (
      <div className={styles.error_container}>
        <h2>¡Ese Pokémon no existe!</h2>
        <button onClick={() => navigate("/pokedex")}>
          Volver a la Pokédex
        </button>
      </div>
    );
  }
  const calcularPorcentajeMax = (valor: number) => {
    return (valor / maxBaseStat) * 100;
  };

  const stats = pokemon.stats as PokemonStats;
  return (
    <div className={styles.detail_container}>
      <button className={styles.btn_back} onClick={() => navigate("/pokedex")}>
        ← Volver
      </button>

      <div className={styles.card_detail}>
        <div className={styles.header_info}>
          <h1>{pokemon.name}</h1>
          <span className={styles.id}>#{pokemon.id}</span>
          <img src={pokemon.sprite} alt={pokemon.name} />

          <div className={styles.types}>
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={styles.badge}
                style={{ backgroundColor: `var(--type-${type})` }}
              >
                {type}
              </span>
            ))}
          </div>
          <div className={styles.physique}>
            <h2>Altura: {calcularPesoAltura(pokemon.height)}M</h2>
            <h2>Peso: {calcularPesoAltura(pokemon.weight)} KG</h2>
          </div>
        </div>

        <div className={styles.stats_info}>
          <h3>Estadisticas</h3>
          {Object.entries(stats).map(([statName, valor]) => (
            <div key={statName} className={styles.stat_row}>
              <span className={styles.stat_name}>{statName}:</span>
              <div className={styles.bar_container}>
                <div
                  className={styles.bar_fill}
                  style={{
                    width: `${calcularPorcentajeMax(valor)}%`,
                    // Si es muy bajo (<50) rojo, si es alto verde
                    backgroundColor:
                      valor > 90
                        ? "#4caf50"
                        : valor > 50
                        ? "#ffeb3b"
                        : "#f44336",
                  }}
                ></div>
              </div>
              <span className={styles.stat_value}>{valor}</span>
            </div>
          ))}
          <div>
            <h3>Habilidades</h3>
            <div className={styles.abilities_container}>
              {pokemon.abilities.map((a) => (
                <span key={a.name} className={styles.abilities}>
                  {a.name}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.moves_section}>
            <h3>Movimientos ({pokemon.moves?.length || 0})</h3>
            <div className={styles.moves_list}>
              {pokemon.moves &&
                pokemon.moves.map((move) => (
                  <span key={move} className={styles.move_tag}>
                    {move}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
