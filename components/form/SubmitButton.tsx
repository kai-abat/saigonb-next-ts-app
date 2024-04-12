"use client";
import { Button, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({
  isValid = true,
  label,
  labelLoading = "Loading",
  color = "primary",
  className,
  modalCloseAfterActionHandler,
  onPressHandler,
}: {
  isValid?: boolean;
  label: string;
  labelLoading: string;
  color?:
    | "primary"
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  className?: string;
  modalCloseAfterActionHandler?: () => void;
  onPressHandler?: () => void;
}) => {
  const [pendingStarted, setPendingStarted] = useState(false);
  const status = useFormStatus();
  const { pending: isPending } = status;

  if (isPending && !pendingStarted) setPendingStarted(true);
  if (!isPending && pendingStarted && modalCloseAfterActionHandler) {
    setPendingStarted(false);
    modalCloseAfterActionHandler();
  }

  // execute modalCloseAfterActionHandler after pending

  return (
    <Button
      color={color}
      radius="md"
      type="submit"
      isDisabled={isPending || !isValid}
      onPress={onPressHandler}
    >
      {!isPending ? (
        label
      ) : (
        <>
          <Spinner color="default" size="sm" />
          {labelLoading.length > 0 && <p>{labelLoading}...</p>}
        </>
      )}
    </Button>
  );
};
export default SubmitButton;
