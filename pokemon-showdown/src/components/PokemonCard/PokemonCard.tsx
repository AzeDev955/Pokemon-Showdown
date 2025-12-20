import styles from "./PokemonCard.module.scss";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  types: string[]; // Ejemplo: ["fire", "flying"]
}

export const PokemonCard = ({ id, name, image, types }: PokemonCardProps) => {
  return (
    <div className={styles.card}>
      <span className={styles.id_number}>{id}</span>
      <img src={image} alt={name} loading="lazy" />
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.types_container}>
        {types.map((type) => (
          <span
            key={type}
            className={styles.type_badge}
            style={{ backgroundColor: `var(--type-${type})` }}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
