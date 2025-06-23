import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Artistly
      </Link>
      <nav className={styles.nav}>
        <Link href="/artists" className={styles.link}>
          Artists
        </Link>
        <Link href="/onboard" className={styles.link}>
          Onboard
        </Link>
        <Link href="/dashboard" className={styles.link}>
          Dashboard
        </Link>
      </nav>
    </header>
  );
}
