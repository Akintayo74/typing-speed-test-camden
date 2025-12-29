// import * as React from "react";
import styles from "./Navbar.module.css";
import { formatTime } from "../../helpers/format.helpers";
import { useTypingStore } from "../../store/use-typing-store";

function Navbar() {
  const wpm = useTypingStore((state) => state.wpm);
  const accuracy = useTypingStore((state) => state.accuracy);
  const elapsedTime = useTypingStore((state) => state.elapsedTime);
  const mode = useTypingStore((state) => state.mode);
  const setMode = useTypingStore((state) => state.setMode);

  const displayTime = mode === 'timed' 
    ? Math.max(0,60 - elapsedTime) 
    : elapsedTime;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.navHeadings}>
          WPM:
          <span>{wpm}</span>
        </div>

        <div className={styles.verticalLine}></div>

        <div className={styles.navHeadings}>
          Accuracy:
          <span>{accuracy}%</span>
        </div>

        <div className={styles.verticalLine}></div>

        <div className={styles.navHeadings}>
          Time:
          <span>{formatTime(displayTime)}</span>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.navHeadings}>
          Difficulty:
          <button>Easy</button>
          <button>Medium</button>
          <button>Hard</button>
        </div>

        <div className={styles.navHeadings}>
          Mode:
          <button onClick={() => setMode('timed')}>
            Timed(60s)
          </button>
          <button onClick={() => setMode('passage')}>
            Passage
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
