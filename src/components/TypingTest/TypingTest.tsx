import * as React from 'react';
import styles from './TypingTest.module.css';
import TypingInput from '../TypingInput';

function TypingTest() {
  const [targetText, setTargetText] = React.useState('Hello world');

  const [userInput, setUserInput] = React.useState('');

  const [status, setStatus] = React.useState('idle');

  const [startTime, setStartTime] = React.useState(null);

  console.log(targetText)
  console.log(userInput)

  function handleInput(input: string) {
    if(!startTime && input.length <= 0) {
      setStartTime(Date.now());
      setStatus('running');
    }

    if(input.length > targetText.length) {
      return;
    }

    setUserInput(input);


    if(input.length === targetText.length) {
      setStatus('finished');
    }
  }
  
  return (
    <>

      <TypingInput
        value={userInput}
        handleInput={handleInput}
        status={status}
      />

      {/* {status === 'finished' && (
        <Results />
      )} */}
    </>
  )
}

export default TypingTest;