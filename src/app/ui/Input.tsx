import { InputProps } from "../types";

const Input = ({ label, type = "text", placeholder }: InputProps) => {
  return (
    <>
      <label className="flex flex-col gap-1 font-medium text-accent">
        {label}
        <input
          type={type}
          placeholder={placeholder}
          className="py-2 px-4 text-black bg-white rounded-lg border-2 border-[#AE97CB] focus:outline-accent placeholder:text-grey-light"
        />
      </label>
    </>
  );
};

export default Input;
