import styles from "./content.module.css";

export default function Content() {
  return (
    <div className={styles.body}>
      <div>
        <h1>Your Money</h1>

        <div className={styles.contentBox}>
          <select className={styles.dropdown}>
            <option value="dollars">dollars</option>
            <option value="rupees">rupees</option>
            <option value="pesos">pesos</option>
          </select>

          <input type="text" placeholder="Enter amount"></input>
        </div>
      </div>

      <div>
        <h1> Convert to</h1>

        <div className={styles.buttonBox}>button here :)</div>
      </div>

      <div>
        <h1> Converted money</h1>

        <div className={styles.contentBox}>
          <select className={styles.dropdown}>
            <option value="dollars">dollars</option>
            <option value="rupees">rupees</option>
            <option value="pesos">pesos</option>
          </select>

          <textarea readOnly style={{ resize: "none" }}></textarea>
        </div>
      </div>
    </div>
  );
}
