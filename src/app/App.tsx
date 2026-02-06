import { HeartButton } from "../components/HeartButton/HeartButton";
import { BpmDisplay } from "../components/Display/BpmDisplay";
import { useHeartRate } from "../hooks/useHeartRate";
import "../styles/globals.css";
import "./App.css";

export default function App() {
  const { bpm, tap, reset, taps } = useHeartRate();

  return (
    <div className="app">
      <div className="card">
        <HeartButton onTap={tap} />
        <BpmDisplay bpm={bpm} taps={taps} />
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
