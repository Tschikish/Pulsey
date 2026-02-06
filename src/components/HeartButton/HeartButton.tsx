import "./HeartButton.css";

type HeartButtonProps = {
  onTap: () => void;
};

export function HeartButton({ onTap }: HeartButtonProps) {
  return (
    <button
      className="heart-button"
      onClick={onTap}
      aria-label="Tap heart"
    >
      ❤️
    </button>
  );
}
