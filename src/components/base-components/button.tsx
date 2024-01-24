import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  customStyle: string;
  pressEffect?: boolean;
  click?: () => void;
  disabled?: boolean;
};

const Button = ({
  children,
  customStyle,
  pressEffect,
  click,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={`${
        pressEffect && "active:scale-[0.9]"
      } p-[20px] ${customStyle}`}
      onClick={click}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
