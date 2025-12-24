import * as React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
        <div>
          WPM:
        </div>

        <div>
          Accuracy:
        </div>

        <div>
          Time:
        </div>

    </div>
  )
}

export default Navbar;