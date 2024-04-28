import { Textarea } from '@nextui-org/react';
import { Controller, useFormContext } from 'react-hook-form';

const TextAreaController = ({
  controllerName,
  label,
  className,
  showError = false,
  isAutoFocus = false,
  isReadOnly = false
}: {
  controllerName: string;
  label: string;
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
          <Textarea
            minRows={3}
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            value={field.value.toString()}
            ref={field.ref}
            isDisabled={field.disabled}
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
export default TextAreaController;
