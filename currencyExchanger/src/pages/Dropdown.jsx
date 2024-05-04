import styles from "./dropdown.module.css";

export const currencies = [
  { name: "dollars", convRate: 1 },
  { name: "rupees", convRate: 83.38 },
  { name: "pesos", convRate: 16.97 },
];

export default function Dropdown({ onChange }) {
  return (
    <select className={styles.dropdown} onChange={onChange}>
      {currencies.map((currency) => (
        <option>{currency.name}</option>
      ))}
    </select>
  );
}
