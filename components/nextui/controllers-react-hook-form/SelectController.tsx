import { Select, SelectItem } from '@nextui-org/react';
import { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export interface SelectControllerItems {
  value: string;
  label: string;
}

function SelectController({
  controllerName,
  items,
  label,
  className,
  showError = false
}: {
  controllerName: string;
  items: SelectControllerItems[];
  label: string;
  className: string;
  showError?: boolean;
}) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={controllerName}
      render={({
        field: { onBlur, name, ref, onChange, value },
        fieldState
      }) => {
        const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
          onChange(e.target.value);
          // setSelectedCategory(e.target.value);
        };

        return (
          <Select
            ref={ref}
            onBlur={onBlur}
            name={name}
            onChange={handleSelectionChange}
            label={label}
            className={className}
            items={items}
            errorMessage={showError && fieldState.error?.message}
            // isInvalid={fieldState.invalid}
            selectedKeys={[value]}
            // onSelectionChange={setSelectedCategory}
            // defaultSelectedKeys={[value]}
            // {...register('category')}
          >
            {/* {category => (
      <SelectItem key={category.id} value={category.name}>
        {category.altName}
      </SelectItem>
    )} */}
            {item => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            )}
            {/* {items.map(category => (
              <SelectItem key={category.name} value={category.name}>
                {category.altName}
              </SelectItem>
            ))} */}
          </Select>
        );
      }}
    />
  );
}
export default SelectController;
