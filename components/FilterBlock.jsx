import styles from "../styles/FilterBlock.module.css";

export default function FilterBlock({ onFilter }) {
  return (
    <div className={styles.filter}>
      <label htmlFor="category">Filter by Category:</label>
      <div className={styles.dropdownWrapper}>
        <select
          id="category"
          onChange={(e) => onFilter(e.target.value)}
          className={styles.select}
        >
          <option value="">All Categories</option>
          <option value="Singer">Singer</option>
          <option value="Dancer">Dancer</option>
          <option value="DJ">DJ</option>
          <option value="Speaker">Speaker</option>
        </select>
        <span className={styles.arrow}>▼</span>
      </div>
    </div>
  );
}
