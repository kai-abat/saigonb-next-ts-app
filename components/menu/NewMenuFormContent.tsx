"use client";

import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Spinner,
  Textarea,
} from "@nextui-org/react";
import FormRow from "../form/FormRow";
import LabeledSwitch from "../nextui/LabeledSwitch";
import { useFormStatus } from "react-dom";
import { State } from "@/utils/services/LoginAction";
import { Category } from "@/utils/types/Props";
import ImageUpload from "../ui/ImageUpload";
import PriceList from "../ui/PriceList";

const NewMenuFormContent = ({
  categories,
  formState,
}: {
  categories: Category[];
  formState: State;
}) => {
  // Pending reflects the loading state of our form
  const { pending } = useFormStatus();
  return (
    <>
      <FormRow name="menuName" formState={formState}>
        <Input
          color="default"
          name="menuName"
          id="menuName"
          type="text"
          label="Menu Name"
          radius="sm"
          className=" max-w-[500px] min-w-[300px]"
        />
      </FormRow>
      <FormRow name="description" formState={formState}>
        <Textarea
          color="default"
          name="description"
          id="description"
          minRows={3}
          label="Description"
          radius="sm"
          className=" max-w-[500px] min-w-[300px]"
        />
      </FormRow>
      <FormRow name="category" formState={formState}>
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

      <FormRow name="isFeatured" formState={formState}>
        <LabeledSwitch
          title="Featured Menu"
          name="isFeatured"
          id="isFeatured"
          description="Featured menu will be posted in featured section."
        />
      </FormRow>

      <FormRow>
        <>
          <Button
            color="primary"
            radius="md"
            type="submit"
            className="max-w-[500px] min-w-[300px] "
            disabled={pending}
          >
            {!pending ? (
              "Save"
            ) : (
              <>
                <Spinner color="default" size="sm" />
                <p>Saving...</p>
              </>
            )}
          </Button>
          <Button
            color="default"
            radius="md"
            type="button"
            className="max-w-[500px] min-w-[300px]"
            disabled={pending}
          >
            Cancel
          </Button>
        </>
      </FormRow>
    </>
  );
};
export default NewMenuFormContent;
