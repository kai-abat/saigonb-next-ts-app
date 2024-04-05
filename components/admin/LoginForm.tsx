"use client";
import { useState } from "react";
import { useFormState } from "react-dom";
import { LoginAction } from "@/utils/services/LoginAction";
import FormRow from "../form/FormRow";
import { Input } from "@nextui-org/input";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Divider } from "@nextui-org/react";
import Title from "../Title";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [state, formAction] = useFormState(LoginAction, null);
  return (
    <section className=" flex flex-col gap-3 justify-start items-start   w-full py-5 px-8">
      <Title>Sign In</Title>
      <p>We&apos;re happy to see you back again!</p>
      <Divider className="w-full" />

      <form className="flex flex-col gap-5 w-full" action={formAction}>
        <FormRow>
          <Input
            // color="primary"
            startContent={
              <MdOutlineSupervisedUserCircle className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text"
            label="Username or Email Address"
            isRequired
            isClearable
            radius="sm"
            variant="faded"
            className=""
            labelPlacement="outside"
            // placeholder="Enter your username or email address"
          />
        </FormRow>
        <FormRow>
          <Input
            labelPlacement="outside"
            // color="primary"
            startContent={
              <RiLockPasswordLine className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            isRequired
            className="w-full"
            radius="sm"
            label="Password"
            variant="faded"
            // placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <FaEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
        </FormRow>
        <FormRow>
          <Button className="w-full" color="primary" radius="md">
            Sign In
          </Button>
        </FormRow>
      </form>
    </section>
  );
};
export default LoginForm;
