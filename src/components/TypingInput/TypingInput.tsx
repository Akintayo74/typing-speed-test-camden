import * as React from 'react';
import styles from './TypingInput.module.css';

function TypingInput({ value, handleInput, status}) {
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