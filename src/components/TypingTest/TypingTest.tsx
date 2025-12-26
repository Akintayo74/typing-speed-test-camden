import * as React from 'react';
import styles from './TypingTest.module.css';
import TypingInput from '../TypingInput';
import TextDisplay from '../TextDisplay';

import typingData from '../../../data.json';
import { sample } from '../../utils';

function TypingTest() {
  const [targetText, setTargetText] = React.useState(() => {
    const randomExercise = sample(typingData.easy);
    return randomExercise.text;
  });

  const [userInput, setUserInput] = React.useState('');

  const [status, setStatus] = React.useState<'idle'|'finished'|'running'>('idle');

  const [startTime, setStartTime] = React.useState<number | null>(null);

  const inputRef = React.useRef<HTMLInputElement>(null);

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

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <>

      <TextDisplay
        targetText={targetText}
        userInput={userInput}
        onFocus={focusInput}
      />

      <TypingInput
        value={userInput}
        handleInput={handleInput}
        status={status}
        ref={inputRef}
      />

      {/* {status === 'finished' && (
        <Results />
      )} */}
    </>
  )
}

export default TypingTest;