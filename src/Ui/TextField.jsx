import { useState } from "react";
export default function TextField({
  type = "text",
  label,
  placeholder,
  value,
  onChange = () => {},
}) {
  const [isFocused, setIsFocused] = useState(false);
  const id = label
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(/[^a-z]+/g, ""))
    .join("_");

  return (
    <div className="mr-2">
      <div>
        <label
          className={`text-sm font-semibold  ${
            isFocused ? "text-indigo-400" : ""
          }`}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
      <input
        className=" naveen-control border-b-2 rounded-sm p-2 w-full focus:border-indigo-700 focus:text-purple-400 outline-none"
        type={type}
        id={id}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => onChange(e.target.value, e)}
        value={value}
      />
    </div>
  );
}
