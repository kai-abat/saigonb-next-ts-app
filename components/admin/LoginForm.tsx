"use client";
import { useState } from "react";
import { useFormState } from "react-dom";
import { LoginAction } from "@/utils/services/LoginAction";
import FormRow from "../form/FormRow";
import { Input } from "@nextui-org/input";
import {
  MdOutlinePassword,
  MdOutlineSupervisedUserCircle,
} from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Divider } from "@nextui-org/react";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [state, formAction] = useFormState(LoginAction, { message: null });
  return (
    <section className=" flex flex-col gap-5 justify-start items-center border-1 border-primary rounded-md p-3 bg-content3">
      <h1 className=" text-2xl font-semibold">
        Welcome brewers, Please login now
      </h1>
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
            placeholder="Enter your username or email address"
          />
        </FormRow>
        <FormRow>
          <Input
            labelPlacement="outside"
            // color="primary"
            startContent={
              <MdOutlinePassword className="text-2xl text-default-400 pointer-events-none flex-shrink-0 mt-4" />
            }
            isRequired
            className="w-full"
            radius="sm"
            label="Password"
            variant="faded"
            placeholder="Enter your password"
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
          <Button className="w-full" color="primary" radius="sm">
            Log in now
          </Button>
        </FormRow>
        <FormRow>
          <Button className="w-full" radius="sm">
            Cancel
          </Button>
        </FormRow>
      </form>
    </section>
  );
};
export default LoginForm;
