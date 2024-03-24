import { AppProps } from "@/utils/Props";

const Brand = ({ className = "" }: AppProps) => {
  return (
    <p
      className={`uppercase tracking-wide text-xl ${
        className !== "" && className
      } `}
    >
      Saigon Brewers
    </p>
  );
};
export default Brand;
