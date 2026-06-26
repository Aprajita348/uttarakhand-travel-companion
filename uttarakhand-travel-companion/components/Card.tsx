type CardProps = {
  title: string;
  description: string;
  onDelete?: () => void;
  onEdit?: () => void;
};

export default function Card({
  title,
  description,
  onDelete,
  onEdit,
}: CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2">{description}</p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}