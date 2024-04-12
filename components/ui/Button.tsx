import { Button as ButtonNUI, Link } from "@nextui-org/react";
import { ReactNode } from "react";

const Button = ({
  type = "button",
  color = "primary",
  className,
  children,
  variant = "solid",
  isDisabled = false,
  isIconOnly = false,
  startContent,
  endContent,
  isLink = false,
  href = "/",
  onPress,
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
  isIconOnly?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isLink?: boolean;
  href?: string;
  onPress?: any;
}) => {
  // className = color === "primary" ? `${className} text-foreground` : className;
  return (
    <ButtonNUI
      variant={variant}
      radius="sm"
      type={type}
      color={color}
      className={` font-bold ${className}`}
      isIconOnly={isIconOnly}
      startContent={startContent}
      endContent={endContent}
      as={isLink ? Link : undefined}
      href={isLink ? href : undefined}
      onPress={onPress}
    >
      {children}
    </ButtonNUI>
  );
};
export default Button;
