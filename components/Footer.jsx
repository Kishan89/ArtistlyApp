import styles from "../styles/Footer.module.css";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h2>Artistly</h2>
          <p>Connecting you with top event talent.</p>
        </div>

        <div className={styles.links}>
          <a href="/artists">Artists</a>
          <a href="/onboard">Onboard</a>
          <a href="/dashboard">Dashboard</a>
        </div>

        <div className={styles.social}>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className={styles.copy}>
        © 2025 <strong>Artistly.com</strong> | All Rights Reserved
      </div>
    </footer>
  );
}
