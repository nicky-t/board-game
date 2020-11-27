import Link from "next/link";
import styles from "./Header.module.css";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <AppBar position="static">
        <Toolbar>
          <div className={styles.container}>
            <Typography variant="h1" className={styles.title}>
              <Link href="/">
                <a className={styles.titleLetter}>BoardGaming</a>
              </Link>
            </Typography>

            <nav className={styles.navigation}>
              <ul className={styles.lists}>
                <li>a</li>
                <li>b</li>
              </ul>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
