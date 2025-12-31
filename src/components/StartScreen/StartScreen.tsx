import * as React from 'react';
import styles from './StartScreen.module.css';
import { useTypingStore } from '../../store/use-typing-store';

function StartScreen({children}: React.PropsWithChildren) {
  const setStatus = useTypingStore((state) => state.setStatus)
  return (
    <div className={styles.container}>
      <div className={styles.startModal}>
        <button onClick={() => setStatus('running')}>
          Start Typing Test
        </button>
        <span>Or click the text and start typing</span>
      </div>

      <div className={styles.blurryText} onClick={() => setStatus('running')}>
        {children}
      </div>
    </div>
  )
}

export default StartScreen;