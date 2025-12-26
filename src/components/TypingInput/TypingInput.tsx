import * as React from "react";
import styles from "./TypingInput.module.css";

type TypingInputProps = {
  value: string;
  handleInput: (input: string) => void;
  status: "idle" | "running" | "finished";
};

const TypingInput = React.forwardRef<HTMLInputElement, TypingInputProps>(
  function TypingInput(props, ref) {
    const { value, handleInput, status } = props;

    return (
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(event) => {
          handleInput(event.target.value);
        }}
        autoFocus
        disabled={status === "finished"}
        className={styles.hiddenInput}
      />
    );
  }
);

TypingInput.displayName = "TypingInput";

export default TypingInput;
