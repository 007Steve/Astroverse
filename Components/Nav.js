import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <img
        className={styles.nav__logo}
        src="https://static.vecteezy.com/system/resources/previews/008/853/678/original/3d-illustration-alien-spaceship-png.png"
      />
      <div className={styles.nav__containerRight}>
        <div className={styles.nav__icons}>
          <VolumeMuteIcon />
        </div>
        <div className={styles.nav__icons}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}

export default Nav;
