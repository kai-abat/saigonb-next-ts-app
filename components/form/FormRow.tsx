import { State } from "@/utils/actions/newMenuAction";
import { extractErrorMessge } from "@/utils/Helper";
import ErrorMessage from "./ErrorMessage";
const FormRow = ({
  children,
  errorMessage,
}: {
  children: React.ReactNode;
  errorMessage?: string;
}) => {
  return (
    <div className="flex gap-4">
      {children}
      {errorMessage && errorMessage.length > 0 && (
        <ErrorMessage message={errorMessage} />
      )}
    </div>
  );
};
export default FormRow;
