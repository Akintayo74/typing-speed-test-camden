import * as React from "react";
import { useTypingStore } from "../store/use-typing-store";

function useTime() {
  const status = useTypingStore((state) => state.status);
  const mode = useTypingStore((state) => state.mode)
  const startTime = useTypingStore((state) => state.startTime);
  const setElapsedTime = useTypingStore((state) => state.setElapsedTime);
  const setStatus = useTypingStore((state) => state.setStatus);

  React.useEffect(() => {
    if (status !== "running" || !startTime) {
      return; //Exit early, don't start timer
    }

    const intervalId = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);

      setElapsedTime(elapsed);

      if(mode === 'timed' && elapsed >= 60) {
        setStatus('finished');
      } 
    }, 1000);

    return () => clearInterval(intervalId);
  }, [status, startTime, mode]);
}

export default useTime;