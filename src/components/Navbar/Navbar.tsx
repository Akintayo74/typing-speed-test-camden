import * as React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navHeadings}>
        WPM:
        <span>0</span>
      </div>

      <div className={styles.verticalLine}></div>

      <div className={styles.navHeadings}>
        Accuracy:
        <span>100%</span>
      </div>

      <div className={styles.verticalLine}></div>

      <div className={styles.navHeadings}>
        Time:
        <span>0.60</span>
      </div>

    </div>
  )
}

export default Navbar;