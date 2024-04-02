import { AppProps } from "@/utils/types/Props";

const Brand = ({ className = "" }: AppProps) => {
  return (
    <p
      className={`uppercase tracking-wide text-base sm:text-lg md:text-xl ${
        className !== "" && className
      } `}
    >
      Saigon Brewers
    </p>
  );
};
export default Brand;
