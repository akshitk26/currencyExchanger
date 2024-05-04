import styles from "./dropdown.module.css";

export default function Dropdown() {
  return (
    <select className={styles.dropdown}>
      <option value="dollars">dollars</option>
      <option value="rupees">rupees</option>
      <option value="pesos">pesos</option>
    </select>
  );
}
