import * as React from "react";
import { useTypingStore } from "../store/use-typing-store";

function useTime() {
  const status = useTypingStore((state) => state.status);
  const startTime = useTypingStore((state) => state.startTime);
  const setElapsedTime = useTypingStore((state) => state.setElapsedTime);

  React.useEffect(() => {
    if (status !== "running" || !startTime) {
      return;
    }

    const intervalId = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);
      setElapsedTime(elapsed);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [status, startTime]);
}

export default useTime;