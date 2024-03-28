import { AppProps } from "@/utils/Props";

const Title = ({ children, capitalize }: AppProps) => {
  return (
    <h1
      className={`font-bold text-3xl text-stone-800 dark:text-stone-100 ${
        capitalize && "capitalize"
      }`}
    >
      {children}
    </h1>
  );
};
export default Title;
