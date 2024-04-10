import { Button as ButtonNUI } from "@nextui-org/react";

const Button = ({
  type = "button",
  color = "primary",
  className,
  children,
  variant = "solid",
  isDisabled = false,
}: {
  type?: "button" | "reset" | "submit";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  className?: string | undefined;
  children?: React.ReactNode;
  isDisabled?: boolean;
}) => {
  // className = color === "primary" ? `${className} text-foreground` : className;
  return (
    <ButtonNUI
      variant={variant}
      radius="sm"
      type={type}
      color={color}
      className={` font-bold ${className}`}
    >
      {children}
    </ButtonNUI>
  );
};
export default Button;
