"use client";
import { LoginAction } from "@/utils/services/LoginAction";
import { useFormState } from "react-dom";
import FormRow from "../form/FormRow";
import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { Category } from "@/utils/Props";
import Title from "../Title";
import LabeledSwitch from "../nextui/LabeledSwitch";
import ImageUpload from "../ui/ImageUpload";
import { useState } from "react";
import PriceList from "../ui/PriceList";

const NewMenuForm = ({ categories = [] }: { categories: Category[] }) => {
  const [state, formAction] = useFormState(LoginAction, { message: "" });
  const [menuName, setMenuName] = useState<string>("");
  return (
    <>
      <header>
        <Title>New Menu</Title>
      </header>
      <main className="">
        <form className="flex flex-col gap-3" action={formAction}>
          <FormRow>
            <Input
              color="default"
              name="menuName"
              id="menuName"
              type="text"
              label="Menu Name"
              isRequired
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
              radius="sm"
              className=" max-w-[500px] min-w-[300px]"
            />
          </FormRow>
          <FormRow>
            <Textarea
              color="default"
              name="description"
              id="description"
              minRows={3}
              label="Description"
              isRequired
              radius="sm"
              className=" max-w-[500px] min-w-[300px]"
            />
          </FormRow>
          <FormRow>
            <Select
              color="default"
              name="category"
              id="category"
              items={categories}
              label="Select Category"
              className=" max-w-[500px] min-w-[300px]"
            >
              {(category) => (
                <SelectItem key={category.id}>{category.altName}</SelectItem>
              )}
            </Select>
          </FormRow>
          <FormRow>
            <LabeledSwitch
              title="Featured Menu"
              name="isFeatured"
              id="isFeatured"
              description="Featured menu will be posted in featured section."
            />
          </FormRow>
          <FormRow>
            <span className=" font-semibold">Cover Photos</span>
          </FormRow>
          <FormRow>
            <ImageUpload />
          </FormRow>
          <FormRow>
            <span className=" font-semibold">Price List</span>
          </FormRow>
          <FormRow>
            <PriceList />
          </FormRow>

          <FormRow>
            <Divider className="w-full" />
          </FormRow>

          <FormRow>
            <Button
              color="primary"
              radius="md"
              type="submit"
              className="max-w-[500px] min-w-[300px]"
            >
              Submit
            </Button>
            <Button
              color="default"
              radius="md"
              type="button"
              className="max-w-[500px] min-w-[300px]"
            >
              Cancel
            </Button>
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
export default NewMenuForm;
