import * as React from 'react';
// import styles from './TypingTest.module.css';
import TypingInput from '../TypingInput';
import TextDisplay from '../TextDisplay';

import useTime from '../../hooks/use-time';
import { useTypingStore } from '../../store/use-typing-store';

import typingData from '../../../data.json';
import { sample } from '../../utils';
import StartScreen from '../StartScreen';



function TypingTest() {
  useTime();
  const status = useTypingStore((state) => state.status);
  const setStatus = useTypingStore((state) => state.setStatus);
  const startTime = useTypingStore((state) => state.startTime);
  const elapsedTime = useTypingStore((state) => state.elapsedTime);
  const setStartTime = useTypingStore((state) => state.setStartTime);
  const setElapsedTime = useTypingStore((state) => state.setElapsedTime);
  const setWpm = useTypingStore((state) => state.setWpm);
  const setAccuracy = useTypingStore((state) => state.setAccuracy);

  const [targetText] = React.useState(() => {
    const randomExercise = sample(typingData.medium);
    return randomExercise.text;
  });

  const [userInput, setUserInput] = React.useState('');
  const [totalErrors, setTotalErrors] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if(userInput.length === 0 || elapsedTime === 0) {
      setWpm(0);
      setAccuracy(100);
      return;
    }

    const wpm = Math.round((userInput.length * 60) / (5 * elapsedTime));

    let correctCount = 0;

    for(let i = 0; i < userInput.length; i++) {
      if(userInput[i] === targetText[i]) {
        correctCount++;
      }
    }
    const accuracy = Math.round((correctCount/userInput.length) * 100)

    setWpm(wpm);
    setAccuracy(accuracy);
  }, [userInput, elapsedTime, targetText])

  function handleInput(input: string) {
    //User starts typing
    if(!startTime && input.length > 0) {
      setStartTime(Date.now() - 1000); //Illusion for immediate visual feedback
      setElapsedTime(1); //Illusion for immediate visual feedback
      setStatus('running');
    }

    if(input.length > userInput.length) {
      const newIndex = input.length -1; 
      if(input[newIndex] !== targetText[newIndex]) {
        setTotalErrors(prev => prev + 1);
      }
    }

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

  if(status === 'idle') {
    return (
      <>
        <StartScreen>
          <TextDisplay
            targetText={targetText}
            userInput={userInput}
            onFocus={focusInput}
          />
        </StartScreen>
      </>
    )
  }

  if (status === 'running') {
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
      </>
    )
  }

  // return (
  //   <>

  //     {/* <TextDisplay
  //       targetText={targetText}
  //       userInput={userInput}
  //       onFocus={focusInput}
  //     />

  //     <TypingInput
  //       value={userInput}
  //       handleInput={handleInput}
  //       status={status}
  //       ref={inputRef}
  //     /> */}

  //     {/* {status === 'finished' && (
  //       <Results />
  //     )} */}
  //   </>
  // )
  return null;
}

export default TypingTest;