const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className=' text-sm text-danger   '>
      <p>{message}</p>
    </div>
  );
};
export default ErrorMessage;
