import * as React from 'react';
import styles from './Navbar.module.css';
import format from 'date-fns/format'

function Navbar() {
  const [startTime, setStartTime] = React.useState<number | null | Date>(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setStartTime(new Date());
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])
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
        <span>{format(startTime, 'hh:mm:ss a')}</span>
      </div>

    </div>
  )
}

export default Navbar;