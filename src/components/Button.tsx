import "./button.styles.css";

type ButtonProps = {
    onClick: () => void;
  };

export default function Button({onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className="px-5 py-3 mt-80">
      <span className="spark__container">
        <span className="spark" />
      </span>
      <span className="backdrop" />
      <span className="text font-semibold">Ver más información</span>
    </button>
  );
}
