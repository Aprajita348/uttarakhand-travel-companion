export default function Input({
  label,
  placeholder,
  value,
  onChange,
}: {
  label?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      {label && (
        <label className="block mb-2 font-medium">
          {label}
        </label>
      )}

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}