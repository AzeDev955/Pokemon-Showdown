/* scripts/generar-json.js */
import fs from "fs"; // Libreria Node para escribir archivos

const CANTIDAD = 1025;

const generarDatos = async () => {
  console.log(`Empezando la descarga de ${CANTIDAD} Pokémon...`);

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${CANTIDAD}`
    );
    const data = await response.json();

    const promesas = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const detalles = await res.json();

      return {
        id: detalles.id,
        name: detalles.name,
        types: detalles.types.map((t) => t.type.name),
        sprite: detalles.sprites.other["official-artwork"].front_default,
        stats: {
          hp: detalles.stats[0].base_stat,
          attack: detalles.stats[1].base_stat,
          defense: detalles.stats[2].base_stat,
          sp_attack: detalles.stats[3].base_stat,
          sp_defense: detalles.stats[4].base_stat,
          speed: detalles.stats[5].base_stat,
        },
        abilities: detalles.abilities.map((a) => ({
          name: a.ability.name,
        })),
        moves: detalles.moves.map((m) => m.move.name),
      };
    });

    const resultados = await Promise.all(promesas);

    const rutaArchivo = "../src/data/pokemons.json";

    // Asegurarnos de que la carpeta existe
    if (!fs.existsSync("./src/data")) {
      fs.mkdirSync("./src/data", { recursive: true });
    }

    fs.writeFileSync(rutaArchivo, JSON.stringify(resultados, null, 2));
  } catch (error) {
    console.error(error);
  }
};

generarDatos();
