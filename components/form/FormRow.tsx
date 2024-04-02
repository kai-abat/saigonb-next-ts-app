import { AppProps } from "@/utils/types/Props";
import { FieldErrors } from "react-hook-form";
import { State } from "@/utils/services/LoginAction";
import { extractErrorMessge } from "@/utils/helpers";
import ErrorMessage from "./ErrorMessage";
const FormRow = ({
  children,
  formState,
  name,
}: {
  children: React.ReactNode;
  formState?: State;
  name?: string;
}) => {
  let message: string | null | undefined;
  if (formState && name) {
    message = extractErrorMessge(formState, name);
  }
  return (
    <div className="flex gap-4">
      {children}
      {typeof message === "string" && <ErrorMessage message={message} />}
    </div>
  );
};
export default FormRow;
