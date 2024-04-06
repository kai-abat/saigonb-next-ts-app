import { Button, Spinner } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({
  isValid = true,
  label,
  labelLoading = "Loading",
}: {
  isValid?: boolean;
  label: string;
  labelLoading: string;
}) => {
  const { pending: isPending } = useFormStatus();

  console.log("SubmitButton", isPending, isValid);
  return (
    <Button
      color="primary"
      radius="md"
      type="submit"
      className="w-full"
      isDisabled={isPending || !isValid}
    >
      {!isPending ? (
        label
      ) : (
        <>
          <Spinner color="default" size="sm" />
          <p>{labelLoading}...</p>
        </>
      )}
    </Button>
  );
};
export default SubmitButton;
