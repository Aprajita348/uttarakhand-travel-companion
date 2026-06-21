export default function Button({ text }: { text: string }) {
  return (
    <button className="bg-green-700 text-white px-4 py-2 rounded">
      {text}
    </button>
  );
}