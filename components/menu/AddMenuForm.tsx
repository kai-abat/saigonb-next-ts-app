"use client";
import { LoginAction } from "@/utils/services/LoginAction";
import { useFormState } from "react-dom";
import FormRow from "../form/FormRow";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Category } from "@/utils/Props";

const AddMenuForm = ({ categories }: { categories: Category[] }) => {
  const [state, formAction] = useFormState(LoginAction, { message: null });
  return (
    <>
      <header>
        <h1>Add New Menu</h1>
      </header>
      <main className="">
        <form className=" max-w-[50rem]" action={formAction}>
          <FormRow className="flex gap-4">
            <Input
              type="text"
              label="Menu Name"
              isRequired
              isClearable
              radius="sm"
            />
          </FormRow>
          <FormRow className="flex gap-4">
            <Textarea minRows={3} label="Description" isRequired radius="sm" />
          </FormRow>
          <FormRow>
            <Select items={categories} label="Select Category">
              {(category) => (
                <SelectItem key={category.id}>{category.altName}</SelectItem>
              )}
            </Select>
          </FormRow>
          {/* <p>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" required />
          </p>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p> */}
          {/* <ImagePicker label="Your image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p> */}
        </form>
      </main>
    </>
  );
};
export default AddMenuForm;
