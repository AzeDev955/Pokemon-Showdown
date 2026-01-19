# 🐉 Pokémon Showdown Clone - React Practice

Este repositorio contiene un clon funcional de una aplicación estilo **Pokémon Showdown / Pokédex**, desarrollado con el objetivo principal de practicar y afianzar conocimientos en **React**, **TypeScript** y el ecosistema moderno de frontend con **Vite**.

El proyecto no solo consume una API externa, sino que implementa estrategias de optimización (como la generación de JSON estático) para mejorar el rendimiento.

## 🚀 Tecnologías Utilizadas

- **Core:** [React](https://react.dev/) (Hooks: `useState`, `useEffect`, `useParams`).
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Tipado fuerte de interfaces de Pokémon y Stats).
- **Build Tool:** [Vite](https://vitejs.dev/) (Entorno de desarrollo rápido).
- **Routing:** [React Router DOM](https://reactrouter.com/) (Navegación SPA: `/pokedex`, `/equipo`, `/jugar`).
- **Estilos:** **SCSS Modules** (Estilos modulares para evitar colisiones de clases).
- **Datos:** [PokéAPI](https://pokeapi.co/) (Fuente de datos original).

## ⚙️ Características Principales

### 📖 Pokédex Interactiva (`/pokedex`)
- Listado completo de **1025 Pokémon**.
- **Buscador en tiempo real:** Filtrado por nombre instantáneo.
- **Lazy Loading / Optimización:** Uso de un JSON local pre-generado para evitar miles de peticiones HTTP en tiempo de ejecución.

### 🔍 Detalle de Pokémon (`/pokedex/:name`)
- Visualización de sprites (oficiales y de combate).
- **Stats Base:** Gráficas de barras coloreadas dinámicamente según el nivel de poder (Rojo/Amarillo/Verde).
- Información detallada: Tipos, habilidades, altura, peso y lista de movimientos.
- Navegación fluida para volver al listado.

### 🛠️ Scripts de Automatización
Se incluye un script personalizado en Node.js (`scripts/generar-json.js`) que:
1. Conecta con la PokéAPI.
2. Descarga y procesa la información de los 1025 Pokémon.
3. Genera un archivo estático `src/data/pokemons.json`.
*Esto permite que la app cargue instantáneamente sin depender de la latencia de la API pública en cada carga.*

## 📦 Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/pokemon-showdown-clone.git](https://github.com/tu-usuario/pokemon-showdown-clone.git)
   cd pokemon-showdown-clone´´´´
2. **Instalar dependencias:**
   ```bash
   npm install
3. **Generar los datos: Antes de iniciar la app, necesitas descargar los datos de los Pokémon.**
   ```bash
   node scripts/generar-json.js
4. **Arrancar el servidor de desarrollo:**
   ```bash
   npm run dev
