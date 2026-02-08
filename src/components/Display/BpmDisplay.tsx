import "./BpmDisplay.css";

type BpmDisplayProps = {
  bpm: number | null;
  taps: number;
};

export function BpmDisplay({ bpm, taps }: BpmDisplayProps) {
  if (taps < 1) {
    return <p className="status">Tap the heart to start</p>;
  }

  if (taps < 2) {
    return <p className="status measuring">Measuring…</p>;
  }

  return (
    <div className="bpm">
      <span className="value">{bpm}</span>
      <span className="unit">BPM</span>
    </div>
  );
}
