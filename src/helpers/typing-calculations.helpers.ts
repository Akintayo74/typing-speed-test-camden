// src/helpers/typing-calculations.ts

/**
 * Calculates Words Per Minute (WPM)
 * Formula: (characters typed * 60) / (5 * seconds elapsed)
 * Standard: 5 characters = 1 word
 */
export function calculateWpm(inputLength: number, elapsedTime: number): number {
    if (inputLength === 0 || elapsedTime === 0) {
      return 0;
    }
    return Math.round((inputLength * 60) / (5 * elapsedTime));
}
  
/**
 * Calculates typing accuracy percentage
 * Returns the percentage of correctly typed characters
 */
export function calculateAccuracy(
    userInput: string,
    targetText: string
): number {
    if (userInput.length === 0) {
        return 100;
    }

    let correctCount = 0;
    const minLength = Math.min(userInput.length, targetText.length);

    for (let i = 0; i < minLength; i++) {
        if (userInput[i] === targetText[i]) {
        correctCount++;
        }
    }

    return Math.round((correctCount / userInput.length) * 100);
}