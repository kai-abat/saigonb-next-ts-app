import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const menuNameSchema = z
  .string()
  .min(5, 'Menu name should be at least 5 characters')
  .max(30, 'Menu name should be at most 30 characters');

export const descriptionSchema = z
  .string()
  .min(10, 'Description should be at least 10 characters')
  .max(100, 'Description should be at most 100 characters');

export const categorySchema = z
  .string()
  .regex(new RegExp('^[0-9]+$'), 'Please select a category');

export const imageURLSchema = z
  .string({
    required_error: 'Please Select Image.',
    invalid_type_error: 'Image URL must be a string'
  })
  .url('Please select cover images.');

export const isFeaturedSchema = z.boolean();

export const NewMenuSchema = z.object({
  menuName: menuNameSchema,
  description: descriptionSchema,
  category: categorySchema,
  isFeatured: isFeaturedSchema
});

export const NewMenuFormDataSchema = zfd.formData({
  menuName: zfd.text(menuNameSchema),
  description: zfd.text(descriptionSchema),
  category: zfd.text(categorySchema),
  isFeatured: zfd.checkbox()
});

export type NewMenuType = z.infer<typeof NewMenuSchema>;
