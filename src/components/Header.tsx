import styles from "./Header.module.css";
import logo from "../assets/Logo.svg";

export function Header() {
  return (
    <nav className={styles.header}>
      <img src={logo} alt="Logo-navbar" />
    </nav>
  );
}
