import { FormValues } from '@/components/menu/MenuFormV2';
import { Category } from '@/utils/types/Props';
import {
  Control,
  FieldErrors,
  UseFieldArrayReturn,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue
} from 'react-hook-form';

export interface menuFormInterface {
  categories: Category[];
  register: UseFormRegister<FormValues>;
  isValid: boolean;
  errors: FieldErrors<FormValues>;
  reset: UseFormReset<FormValues>;
  control: Control<FormValues, any>;
  imageUploadFieldArray: UseFieldArrayReturn<FormValues, 'imageUpload', 'id'>;
  priceListFieldArray: UseFieldArrayReturn<FormValues, 'priceList', 'id'>;
  setValue: UseFormSetValue<FormValues>;
}
