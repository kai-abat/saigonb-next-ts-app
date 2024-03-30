import { AppProps } from "@/utils/Props";

const FormRow = ({ children }: AppProps) => {
  return <div className="flex gap-4">{children}</div>;
};
export default FormRow;
