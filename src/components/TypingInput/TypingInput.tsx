import * as React from 'react';
import styles from './TypingInput.module.css';

type TypingInputProps = {
  value: string;
  handleInput: (input: string) => void;
  status: 'idle' | 'running' | 'finished';
}

function TypingInput({ value, handleInput, status}: TypingInputProps) {
  return (
    <input
      type='text'
      value={value}
      onChange={(event) => {
        handleInput(event.target.value)
      }}
      autoFocus
      disabled={status==='finished'}
    />
  )
}

export default TypingInput;