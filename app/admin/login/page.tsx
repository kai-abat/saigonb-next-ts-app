import LoginForm from "@/components/admin/LoginForm";
import Logo from "@/components/layout/Logo";

const LoginPage = () => {
  return (
    <div className="flex ">
      <section className=" w-full hidden sm:flex max-w-full sm:max-w-[50%] sm:justify-center sm:items-center p-10">
        <Logo width={300} height={300} />
      </section>
      <section className="flex max-w-full sm:max-w-[50%] w-full justify-center sm:justify-end">
        <LoginForm />
      </section>
    </div>
  );
};
export default LoginPage;
