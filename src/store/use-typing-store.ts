import { create } from "zustand";

type TypingState = {
  elapsedTime: number;
  wpm: number;
  accuracy: number;
  status: "idle" | "running" | "finished";
  startTime: number | null;

  setElapsedTime: (time: number) => void;
  setWpm: (wpm: number) => void;
  setAccuracy: (accuracy: number) => void;
  setStatus: (status: "idle" | "running" | "finished") => void;
  setStartTime: (time: number | null) => void;
  reset: () => void;
};

export const useTypingStore = create<TypingState>((set) => ({
    //Initial State
    elapsedTime: 0,
    wpm: 0,
    accuracy: 100,
    status: "idle",
    startTime: null,

    //Actions
    setElapsedTime: (time) => set({elapsedTime: time}),
    setWpm: (wpm) => set({wpm}),
    setAccuracy: (accuracy) => set({accuracy}),
    setStatus: (status) => set({status}),
    setStartTime: (time) => set({startTime: time}),

    //Reset to initial state
    reset: () => set({
        elapsedTime: 0,
        wpm: 0,
        accuracy: 100,
        status: 'idle',
        startTime: null,
    })
}))
