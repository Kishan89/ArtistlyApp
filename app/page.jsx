import Link from "next/link";
import styles from "../styles/Home.module.css";
import categories from "../data/categories.json";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Welcome to <span>Artistly</span>
          </h1>
          <p className={styles.subtitle}>
            Book the most talented performers for your events.
          </p>
          <Link href="/artists" className={styles.cta}>
            Explore Artists
          </Link>
        </div>
      </section>

      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Top Categories</h2>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={styles.card}
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className={styles.overlay}>
                <h3>{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
