import * as React from "react";
import styles from "./TextDisplay.module.css";

type TextDisplayProps = {
  targetText: string;
  userInput: string;
  onFocus?: () => void;
};

function TextDisplay({ targetText, userInput, onFocus }: TextDisplayProps) {
  const chars = targetText.split("");
  return (
    <div className={styles.container} onClick={onFocus}>
      {chars.map((char: string, index: number) => {
        let status = styles.pending;

        if (index < userInput.length) {
          const userChar = userInput[index];
          status = userChar === char ? styles.correct : styles.incorrect;
        } else if (index === userInput.length) {
          status = styles.current;
        }

        return (
          <span key={index} className={status}>
            {char}
          </span>
        );
      })}
    </div>
  );
}

export default TextDisplay;
