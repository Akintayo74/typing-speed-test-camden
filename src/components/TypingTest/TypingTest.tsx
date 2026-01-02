import * as React from "react";
import TypingInput from "../TypingInput";
import TextDisplay from "../TextDisplay";

import useTime from "../../hooks/use-time";
import { useTypingStore } from "../../store/use-typing-store";
import { useNavigate } from "react-router-dom";
import {
  calculateWpm,
  calculateAccuracy,
} from "../../helpers/typing-calculations.helpers";

import typingData from "../../../data.json";
import { sample } from "../../utils";
import StartScreen from "../StartScreen";

function TypingTest() {
  useTime();

  const navigate = useNavigate();

  const status = useTypingStore((state) => state.status);
  const startTime = useTypingStore((state) => state.startTime);
  const elapsedTime = useTypingStore((state) => state.elapsedTime);

  const [targetText] = React.useState(() => {
    const randomExercise = sample(typingData.medium);
    return randomExercise.text;
  });

  const [userInput, setUserInput] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (status === "finished") {
      navigate("/results");
    }
  }, [status]);

  React.useEffect(() => {
    const { setWpm, setAccuracy } = useTypingStore.getState();
    if (userInput.length === 0 || elapsedTime === 0) {
      setWpm(0);
      setAccuracy(100);
      return;
    }

    const wpm = calculateWpm(userInput.length, targetText);
    const accuracy = calculateAccuracy(userInput, targetText);

    setWpm(wpm);
    setAccuracy(accuracy);
  }, [userInput, elapsedTime, targetText]);

  function handleInput(input: string) {
    const { setStatus, setStartTime, setElapsedTime } =
      useTypingStore.getState();
    //User starts typing
    if (!startTime && input.length > 0) {
      setStartTime(Date.now() - 1000); //Illusion for immediate visual feedback
      setElapsedTime(1); //Illusion for immediate visual feedback
      setStatus("running");
    }

    if (input.length > userInput.length) {
      const { incrementTotalErrors } = useTypingStore.getState();

      const newIndex = input.length - 1;
      if (input[newIndex] !== targetText[newIndex]) {
        incrementTotalErrors();
      }
    }

    if (input.length > targetText.length) {
      return;
    }

    setUserInput(input);

    if (input.length === targetText.length) {
      setStatus("finished");
    }
  }

  function focusInput() {
    inputRef.current?.focus();
  }

  if (status === "idle") {
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
    );
  } else if (status === "running") {
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
    );
  } else {
    return null;
  }
}

export default TypingTest;
