import { AppProps } from "@/utils/Props";

const FormRow = ({ children }: AppProps) => {
  return <div className="flex gap-4 w-full">{children}</div>;
};
export default FormRow;
