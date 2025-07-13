interface Props {
  isChecked: boolean;
  onChange: (value: boolean) => void;
}

export default function Toggle({ isChecked, onChange }: Props) {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        onChange={(e) => onChange(e.target.checked)}
        checked={isChecked}
      />
      <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-500 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
    </label>
  );
}
