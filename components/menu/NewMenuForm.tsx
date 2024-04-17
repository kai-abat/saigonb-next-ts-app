"use client";
import { newMenuAction, State } from "@/utils/actions/menuActions";
import { useFormState, useFormStatus } from "react-dom";
import FormRow from "../form/FormRow";
import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Spinner,
  Textarea,
} from "@nextui-org/react";
import Title from "../ui/Title";
import LabeledSwitch from "../nextui/LabeledSwitch";
import ImageUpload from "../ui/ImageUpload";
import { useEffect, useState } from "react";
import PriceList from "../ui/PriceList";
import { NewMenuProps } from "@/utils/types/ClientProps";
import NewMenuFormContent from "./NewMenuFormContent";

const NewMenuForm = ({ categories = [] }: NewMenuProps) => {
  const [state, formAction] = useFormState<State, FormData>(
    newMenuAction,
    null
  );

  // Show the return value/state of server action newMenuAction
  useEffect(() => {
    if (!state) {
      return;
    }
    // In case our form action returns `error` we can now `setError`s
    if (state.status === "error") {
      console.log("ERRORS!:", state.errors);
    }
    if (state.status === "success") {
      alert(JSON.stringify(state));
    }
  }, [state]);

  return (
    <>
      <header>
        <Title capitalize>New Menu</Title>
      </header>
      <main className="">
        <form className="flex flex-col gap-3" action={formAction}>
          <NewMenuFormContent categories={categories} formState={state} />
        </form>
      </main>
    </>
  );
};
export default NewMenuForm;
