import LoginForm from "@/components/admin/LoginForm";
import Logo from "@/components/layout/Logo";
import CurvyContainer from "@/components/ui/CurvyContainer";
import { getUserData } from "@/utils/services/UserAPI";
import { Image } from "@nextui-org/react";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const userData = await getUserData();
  // Temporary go to home page if already authenticated
  if (userData) redirect("/");

  return (
    <div className="flex bg-content3  ">
      <CurvyContainer>
        <div className="w-full h-full object-fill bg-[url('/images/login-bg-1.jpg')] bg-no-repeat bg-center bg-cover">
          <div className=" bg-primary/20 w-full h-full" />
        </div>
      </CurvyContainer>
      <section className="flex max-w-full sm:max-w-[50%] w-full justify-center sm:justify-end ">
        <LoginForm />
      </section>
    </div>
  );
};
export default LoginPage;
