import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>CVision</h1>
      <nav className={styles.nav}>
        <a href="">Cv Page</a>
        <a href="">Applications</a>
        <button>Log In</button>
      </nav>
    </header>
  );
};

export default Header;
