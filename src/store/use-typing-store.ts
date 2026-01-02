import { create } from "zustand";

type TypingState = {
  elapsedTime: number;
  wpm: number;
  accuracy: number;
  status: "idle" | "running" | "finished";
  startTime: number | null;
  mode: "timed" | "passage";
  difficulty: "easy" | "medium" | "hard";
  totalErrors: number;

  setElapsedTime: (time: number) => void;
  setWpm: (wpm: number) => void;
  setAccuracy: (accuracy: number) => void;
  setStatus: (status: "idle" | "running" | "finished") => void;
  setStartTime: (time: number | null) => void;
  setMode: (mode: "timed" | "passage") => void;
  setDifficulty: (difficulty: "easy" | "medium" | "hard") => void;
  setTotalErrors: (count: number) => void;
  incrementTotalErrors: () => void;
  reset: () => void;
};

export const useTypingStore = create<TypingState>((set) => ({
    //Initial State
    elapsedTime: 0,
    wpm: 0,
    accuracy: 100,
    status: "idle",
    startTime: null,
    mode: "timed",
    difficulty: "easy",
    totalErrors: 0,

    //Actions
    setElapsedTime: (time) => set({elapsedTime: time}),
    setWpm: (wpm) => set({wpm}),
    setAccuracy: (accuracy) => set({accuracy}),
    setStatus: (status) => set({status}),
    setStartTime: (time) => set({startTime: time}),
    setMode: (mode) => set({mode}),
    setDifficulty: (difficulty) => set({difficulty}),
    setTotalErrors: (count) => set({totalErrors: count}),
    incrementTotalErrors: () => set((state) => ({
      totalErrors: state.totalErrors + 1
    })),

    //Reset to initial state
    reset: () => set({
        elapsedTime: 0,
        wpm: 0,
        accuracy: 100,
        status: 'idle',
        startTime: null,
        difficulty: 'easy',
        totalErrors: 0,
    })
}))
