import { Input } from '@nextui-org/react';
import { Controller, useFormContext } from 'react-hook-form';

const InputController = ({
  controllerName,
  label,
  className,
  type,
  showError = false,
  isAutoFocus = false,
  isReadOnly = false
}: {
  controllerName: string;
  label: string;
  type: string;
  className?: string;
  showError?: boolean;
  isAutoFocus?: boolean;
  isReadOnly?: boolean;
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={controllerName}
      render={({ field, fieldState }) => {
        return (
          <Input
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            value={field.value.toString()}
            ref={field.ref}
            isDisabled={field.disabled}
            type={type}
            variant='faded'
            radius='sm'
            // readOnly
            label={label}
            errorMessage={showError && fieldState.error?.message?.toString()}
            // isInvalid={showError && fieldState.invalid}
            autoFocus={isAutoFocus}
            className={className}
            readOnly={isReadOnly}
            // className='hidden'
          />
        );
      }}
    />
  );
};
export default InputController;
