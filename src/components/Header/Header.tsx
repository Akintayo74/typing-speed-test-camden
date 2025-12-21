import * as React from 'react';
import styles from './Header.module.css';

import logo from '../../assets/images/logo-large.svg'

function Header() {
  return (
    <header className={styles.container}>
      <div>
        <img src={logo} />
      </div>
    </header>
  )
}

export default Header;