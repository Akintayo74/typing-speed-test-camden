import * as React from 'react';
import styles from './TypingTest.module.css';

function TypingTest() {
  const [targetText, setTargetText] = React.useState('');

  const [userInput, setUserInput] = React.useState('');

  const [status, setStatus] = React.useState('idle');
  
  return (
    <div className={styles.container}>
      
    </div>
  )
}

export default TypingTest;