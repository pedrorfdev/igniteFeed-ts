import igniteLogo from "../assets/Ignite logo-svg.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} />
    </header>
  );
}
