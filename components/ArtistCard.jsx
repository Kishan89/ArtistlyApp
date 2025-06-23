import styles from "../styles/ArtistCard.module.css";

export default function ArtistCard({ artist }) {
  const getImageUrl = () =>
    artist?.image?.trim() ||
    `https://source.unsplash.com/400x300/?${encodeURIComponent(
      artist?.category || "artist"
    )}`;

  return (
    <div className={styles.card}>
      <img
        src={getImageUrl()}
        alt={`Photo of ${artist?.name}`}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{artist?.name}</h3>
        <p className={styles.text}>{artist?.category}</p>
        <p className={styles.text}>{artist?.location}</p>
        <p className={styles.text}>{artist?.fee}</p>
        <button className={styles.button}>Ask for Quote</button>
      </div>
    </div>
  );
}
