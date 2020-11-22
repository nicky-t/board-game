import styles from "../../styles/Header.module.css";
import Typography from "@material-ui/core/Typography";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Typography variant="h1" className={styles.title}>
          BoardGaming
        </Typography>

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
