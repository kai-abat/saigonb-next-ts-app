import { ComponentProps } from "@/utils/types/Props";

const CurvyContainer = ({ children }: ComponentProps) => {
  return (
    <section className="container-curve-shape w-full hidden sm:flex max-w-full sm:max-w-[50%] sm:justify-center sm:items-center p-0">
      {children}
    </section>
  );
};
export default CurvyContainer;
