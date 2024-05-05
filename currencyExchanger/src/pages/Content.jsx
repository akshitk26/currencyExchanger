import styles from "./content.module.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { currencies } from "../pages/Dropdown";

export default function Content() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [convMoney, setConvMoney] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convert = () => {
    const inRate = currencies.find((c) => c.name === currency).convRate;
    const outRate = currencies.find((c) => c.name === convMoney).convRate;

    setConvertedAmount((amount / inRate) * outRate);
  };

  return (
    <div className={styles.body}>
      <div>
        <h1>Your Money</h1>

        <div className={styles.contentBox}>
          <input
            type="number"
            placeholder="Enter amount"
            className={styles.amountBox}
            onChange={(e) => setAmount(Number(e.target.value))}
          ></input>

          <Dropdown
            onChange={(e) => {
              const selectedCurrency = currencies.find(
                (currency) => currency.name === e.target.value
              );
              setCurrency(selectedCurrency.name);
            }}
          />
          {/* {console.log(amount)}
          {console.log(currency)} */}
        </div>
      </div>

      <div>
        <div className={styles.buttonBox}>
          <button onClick={convert}>Convert</button>
        </div>
      </div>

      <div>
        <h1> Converted money</h1>

        <div className={styles.contentBox}>
          <textarea readOnly style={{ resize: "none" }} value={convertedAmount}>
            {convertedAmount}
          </textarea>

          <Dropdown
            onChange={(e) => {
              const selectedCurrency = currencies.find(
                (currency) => currency.name === e.target.value
              );
              setConvMoney(selectedCurrency.name);
            }}
          />
        </div>
      </div>
    </div>
  );
}
