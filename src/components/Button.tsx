import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-red-500 h-10 xl:h-12 rounded-lg text-white hover:bg-red-600 transition-colors",
        props?.className
      )}
    />
  );
};

export default Button;
