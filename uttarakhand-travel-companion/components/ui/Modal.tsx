type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {

if (!isOpen) return null;

return (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center">

<div className="bg-white p-6 rounded w-[400px]">

<h2 className="text-xl font-bold">
{title}
</h2>

<div className="mt-4">
{children}
</div>

<button
onClick={onClose}
className="
mt-4
bg-red-500
text-white
px-4
py-2
rounded
"
>
Close
</button>

</div>

</div>

);

}