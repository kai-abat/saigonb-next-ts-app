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
import useZodFormValidation from "@/utils/hooks/useZodFormValidation";
import {
  categorySchema,
  descriptionSchema,
  isFeaturedSchema,
  menuNameSchema,
} from "@/utils/zod/NewMenuSchema";
import { useState } from "react";
import { extractErrorMessge } from "@/utils/Helper";

const NewMenuFormContent = ({
  categories,
  formState,
}: {
  categories: Category[];
  formState: State;
}) => {
  // const [isValid, setIsValid] = useState<boolean>(false);
  // Pending reflects the loading state of our form
  const { pending } = useFormStatus();

  // client validation
  const {
    valid: validMenuName,
    message: messageMenuName,
    onChangeEvent: onChangeMenuName,
    name: nameMenuName,
  } = useZodFormValidation("menuName", menuNameSchema, "input", formState);

  const {
    valid: validDescription,
    message: messageDescription,
    onChangeEvent: onChangeDescription,
    name: nameDescription,
  } = useZodFormValidation(
    "description",
    descriptionSchema,
    "input",
    formState
  );

  const {
    valid: validCategory,
    message: messageCategory,
    onChangeSelectEvent: onChangeCategory,
    name: nameCategory,
  } = useZodFormValidation("category", categorySchema, "select", formState);

  const {
    valid: validIsFeatured,
    message: messageIsFeatured,
    onChangeEvent: onChangeIsFeatured,
    name: nameIsFeatured,
  } = useZodFormValidation(
    "isFeatured",
    isFeaturedSchema,
    "checkbox",
    formState
  );

  let allValid = true;
  let formErrorMessage = "";
  if (
    !validMenuName ||
    !validIsFeatured ||
    !validDescription ||
    !validCategory
  ) {
    allValid = false;
    formErrorMessage = "Please fill-up the missing menu details";
  }

  return (
    <>
      <FormRow>
        <Input
          color="default"
          name={nameMenuName}
          id={nameMenuName}
          type="text"
          label="Menu Name"
          radius="sm"
          className=" max-w-[500px] min-w-[300px]"
          onChange={onChangeMenuName}
          errorMessage={messageMenuName}
          isInvalid={!validMenuName}
          // errorMessage={
          //   servMessageMenuName ? servMessageMenuName : messageMenuName
          // }
          // isInvalid={!validMenuName || servMessageMenuName !== null}
        />
      </FormRow>
      <FormRow>
        <Textarea
          color="default"
          name={nameDescription}
          id={nameDescription}
          minRows={3}
          label="Description"
          radius="sm"
          className=" max-w-[500px] min-w-[300px]"
          onChange={onChangeDescription}
          errorMessage={messageDescription}
          isInvalid={!validDescription}
        />
      </FormRow>
      <FormRow>
        <Select
          color="default"
          name={nameCategory}
          id={nameCategory}
          items={categories}
          label="Select Category"
          className=" max-w-[500px] min-w-[300px]"
          onChange={onChangeCategory}
          errorMessage={messageCategory}
          isInvalid={!validCategory}
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
        <ImageUpload formState={formState} />
      </FormRow>
      <FormRow>
        <span className=" font-semibold">Price List</span>
      </FormRow>
      <FormRow>
        <PriceList />
      </FormRow>

      <FormRow errorMessage={messageIsFeatured}>
        <LabeledSwitch
          title="Featured Menu"
          name={nameIsFeatured}
          onChangeIsFeatured={onChangeIsFeatured}
          description="Featured menu will be posted in featured section."
        />
      </FormRow>

      <FormRow>
        <Divider className="w-full" />
      </FormRow>

      {!allValid && <p>{formErrorMessage}</p>}

      <FormRow>
        <>
          <Button
            color="primary"
            radius="md"
            type="submit"
            className="max-w-[500px] min-w-[300px] invalid:disabled:bg-content4 disabled:text-foreground"
            disabled={pending || !allValid}
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
