import * as React from 'react';
// import styles from './TypingTest.module.css';
import TypingInput from '../TypingInput';
import TextDisplay from '../TextDisplay';

import useTime from '../../hooks/use-time';
import { useTypingStore } from '../../store/use-typing-store';

import typingData from '../../../data.json';
import { sample } from '../../utils';



function TypingTest() {
  useTime();
  const status = useTypingStore((state) => state.status);
  const setStatus = useTypingStore((state) => state.setStatus);
  const startTime = useTypingStore((state) => state.startTime);
  const setStartTime = useTypingStore((state) => state.setStartTime);
  const setElapsedTime = useTypingStore((state) => state.setElapsedTime)

  const [targetText] = React.useState(() => {
    const randomExercise = sample(typingData.medium);
    return randomExercise.text;
  });

  const [userInput, setUserInput] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  function handleInput(input: string) {
    //User starts typing
    if(!startTime && input.length > 0) {
      setStartTime(Date.now() - 1000); //Illusion for immediate visual feedback
      setElapsedTime(1); //Illusion for immediate visual feedback
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