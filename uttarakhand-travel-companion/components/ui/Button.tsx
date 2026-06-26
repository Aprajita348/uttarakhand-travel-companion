export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-green-700 text-white px-4 py-2 rounded"
    >
      {text}
    </button>
  );
}