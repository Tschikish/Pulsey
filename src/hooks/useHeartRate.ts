import { useState } from "react";
import { calculatebpm } from "../utils/bpm";

const RESET_DELAY = 2500;
const MAX_TAPS = 6;

export function useHeartRate(): {
  bpm: number | null;
  tap: () => void;
  reset: () => void;
  taps: number;
} {
  const [timeStamps, setTimeStamps] = useState<number[]>([]);
  const [bpm, setBpm] = useState<number | null>(null);

  const tap = () => {
    const now = Date.now();

    setTimeStamps((prev) => {
      const last = prev[prev.length - 1];
      const freshstart = !last || now - last > RESET_DELAY;

      const base = freshstart ? [] : prev;

      const next = [...base, now].slice(-MAX_TAPS);

      if (next.length < 2) {
        setBpm(null);
      } else {
        setBpm(calculatebpm(next));
      }

      return next;
    });
  };
  const reset = () => {
    setTimeStamps([]);
    setBpm(null);
  };

  return {
    bpm,
    tap,
    reset,
    taps: timeStamps.length,
  };
}
