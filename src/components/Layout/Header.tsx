import styles from "../../styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>BoardGaming</h1>

        <nav className={styles.navigation}>
          <ul className={styles.lists}>
            <li>a</li>
            <li>b</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
