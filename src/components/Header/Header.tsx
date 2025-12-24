import * as React from 'react';
import styles from './Header.module.css';

import tabletLogo from '../../assets/images/logo-large.svg'
import mobileLogo from '../../assets/images/logo-small.svg'
import trophy from '../../assets/images/icon-personal-best.svg'

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.tabletLogo}>
        <img src={tabletLogo} />
      </div>
      <div className={styles.mobileLogo}>
        <img src={mobileLogo} />
      </div>

      <div className={styles.details}>
        <img src={trophy} width={18} height={16}/>
        <span className={styles.personalBest}>Best: <b>92WPM</b></span>
      </div>
    </header>
  )
}

export default Header;