import { ComponentProps } from "@/utils/types/Props";

const Title = ({ children, capitalize }: ComponentProps) => {
  return (
    <h1
      className={`font-bold text-xl sm:text-2xl lg:text-3xl text-secondary ${
        capitalize && "capitalize"
      }`}
    >
      {children}
    </h1>
  );
};
export default Title;
