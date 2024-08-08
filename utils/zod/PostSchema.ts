import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const descriptionSchema = z
  .string({
    required_error: 'Please provide description'
  })
  .min(10, 'Description should be at least 10 characters')
  .max(100, 'Description should be at most 100 characters');

export const PostSchema = z.object({
  description: zfd.text(descriptionSchema)
});

export type PostSchemaType = z.infer<typeof PostSchema>;
