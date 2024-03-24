import { Progress } from "@nextui-org/react";

const ProgressBarDefault = () => {
  return (
    <Progress
      size="md"
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md"
    />
  );
};
export default ProgressBarDefault;
