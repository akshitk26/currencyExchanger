import styles from "./content.module.css";
import Dropdown from "./Dropdown";

export default function Content() {
  return (
    <div className={styles.body}>
      <div>
        <h1>Your Money</h1>

        <div className={styles.contentBox}>
          <input
            type="number"
            placeholder="Enter amount"
            className={styles.amountBox}
          ></input>

          <Dropdown />
        </div>
      </div>

      <div>
        <div className={styles.buttonBox}>
          <button> Convert to: </button>
        </div>
      </div>

      <div>
        <h1> Converted money</h1>

        <div className={styles.contentBox}>
          <textarea readOnly style={{ resize: "none" }}></textarea>

          <Dropdown />
        </div>
      </div>
    </div>
  );
}
