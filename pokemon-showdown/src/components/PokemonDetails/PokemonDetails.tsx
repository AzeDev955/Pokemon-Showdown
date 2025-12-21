import { useParams, useNavigate } from "react-router-dom"
import pokemons from '../../data/pokemons.json'
import styles from './PokemonDetails.module.scss'

const maxBaseStat = 780;
interface PokemonStats {
    hp:number;
    attack: number;
    defense: number;
    sp_attack:number;
    sp_defense: number;
    speed: number;
}
const PokemonDetails = () => {
    const {name} = useParams();//lee el parametro y de ahi saca el nombre;
    const navigate = useNavigate(); //sirve para navegar en SPA

    const pokemon = pokemons.find((p)=>{
        p.name.toLowerCase() === name?.toLowerCase();
    })
    if(!pokemon){
        //mi idea era un simple return, la IA pone cosas mas chulas
        return (
         <div className={styles.error_container}>
        <h2>¡Ese Pokémon no existe!</h2>
        <button onClick={() => navigate("/")}>Volver a la Pokédex</button>
      </div>
    );
    }
    const calcularPorcentajeMax = (valor: number) =>{
        return (valor / maxBaseStat) * 100
    }
    return(
        
    )
}