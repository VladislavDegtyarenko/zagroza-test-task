import { ReactNode } from "react";

import { ButtonProps } from "../types";

const Button = ({ children, variant, align, className = "" }: ButtonProps) => {
  let variantStyles;

  switch (variant) {
    case "solid":
      variantStyles = "bg-action text-accent-dark";
      break;

    case "solid-white":
      variantStyles =
        "bg-white text-accent font-normal rounded-none text-grey min-w-[122px]";
      break;
    default:
      variantStyles = "bg-transparent border-2 border-current";
      break;
  }

  return (
    <button
      className={`text-base font-semibold p-[11px] rounded-lg min-w-[186px] ${variantStyles} ${
        align === "right" ? "block ml-auto" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
