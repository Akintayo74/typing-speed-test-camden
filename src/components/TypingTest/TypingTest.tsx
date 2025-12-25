import * as React from 'react';
import styles from './TypingTest.module.css';
import TypingInput from '../TypingInput';
import TextDisplay from '../TextDisplay';

function TypingTest() {
  const [targetText, setTargetText] = React.useState('Hello world');

  const [userInput, setUserInput] = React.useState('');

  const [status, setStatus] = React.useState<'idle'|'finished'|'running'>('idle');

  const [startTime, setStartTime] = React.useState<number | null>(null);

  console.log(targetText)
  console.log(userInput)

  function handleInput(input: string) {
    if(!startTime && input.length > 0) {
      setStartTime(Date.now());
      setStatus('running');
    }
    console.log(startTime)

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

      <TextDisplay
        targetText={targetText}
        userInput={userInput}
      />

      {/* {status === 'finished' && (
        <Results />
      )} */}
    </>
  )
}

export default TypingTest;