import { AppProps } from "@/utils/types/Props";
import { Switch, cn } from "@nextui-org/react";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

function LabeledSwitch({
  title = "",
  description = "",
  name,
  onChangeIsFeatured,
}: {
  title: string;
  description: string;
  name: string;
  onChangeIsFeatured: ChangeEventHandler<HTMLInputElement>;
}) {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  const id = name;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(
      "LabeledSwitch handleChange",
      e.target.name,
      e.target.value,
      e.target.checked
    );

    // onChange(e);
  }
  return (
    <Switch
      name={name}
      id={id}
      isSelected={isSelected}
      // onChange={handleChange}
      onChange={(e) => onChangeIsFeatured(e)}
      onValueChange={setIsSelected}
      classNames={{
        base: cn(
          "inline-flex flex-row-reverse w-full max-w-md bg-content2 hover:bg-content3 items-center",
          "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
        wrapper: "p-0 h-4 overflow-visible",
        thumb: cn(
          "w-6 h-6 border-2 shadow-lg",
          "group-data-[hover=true]:border-primary",
          //selected
          "group-data-[selected=true]:ml-6",
          // pressed
          "group-data-[pressed=true]:w-7",
          "group-data-[selected]:group-data-[pressed]:ml-4"
        ),
      }}
    >
      <div className="flex flex-col gap-1">
        <p className="text-medium">{title}</p>
        <p className="text-tiny text-default-400">{description}</p>
      </div>
    </Switch>
  );
}

export default LabeledSwitch;
