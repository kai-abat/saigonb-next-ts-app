const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className=" text-danger font-light text-base ">
      <p>{message}</p>
    </div>
  );
};
export default ErrorMessage;
