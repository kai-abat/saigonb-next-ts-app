import { z } from 'zod';
import { zfd } from 'zod-form-data';
import { getDupelicateIndexFromArrayList } from '../Helper';

export const menuNameSchema = z
  .string({
    required_error: 'Please provide menu name'
  })
  .min(5, 'Menu name should be at least 5 characters')
  .max(30, 'Menu name should be at most 30 characters');

export const descriptionSchema = z
  .string({
    required_error: 'Please provide description'
  })
  .min(10, 'Description should be at least 10 characters')
  .max(100, 'Description should be at most 100 characters');

export const categorySchema = z
  .number({
    required_error: 'Please select a category'
  })
  .min(1, 'Please select a category');
// .regex(new RegExp('^[0-9]+$'), 'Please select a category');

export const imageURLSchema = z
  .string({
    required_error: 'Please select an image.',
    invalid_type_error: 'Image URL must be a string'
  })
  .url('Please select an images.');

export const isFeaturedSchema = z.boolean();

export const NewMenuSchema = z.object({
  menuName: menuNameSchema,
  description: descriptionSchema,
  category: categorySchema,
  isFeatured: isFeaturedSchema,
  imageUploadL: z.array(
    z.object({
      id: zfd.text(z.string()),
      imageUrl: zfd.text(
        z
          .string({
            required_error: 'Please select an image'
          })
          .url('Please select cover images.')
      )
    })
  )
});

export const NewMenuFormDataSchema = zfd.formData({
  menuName: zfd.text(menuNameSchema),
  description: zfd.text(descriptionSchema),
  category: zfd.numeric(categorySchema),
  isFeatured: zfd.checkbox({ trueValue: 'true' }),
  imageUpload: z.array(
    zfd.formData({
      imageId: zfd.numeric(z.number()),
      imageUrl: zfd.text(imageURLSchema),
      orderNumber: zfd.numeric(z.number())
    })
  ),
  priceList: z
    .array(
      zfd.formData({
        priceId: zfd.numeric(z.number()),
        type: zfd.text(z.string()),
        size: zfd.text(z.string()),
        price: zfd.numeric(z.number().min(1, 'Please enter a valid price'))
      })
    )
    .superRefine((items, ctx) => {
      const typeSizeItems = items.map(value => `${value.type}_${value.size}`);

      const uniqueItemsCount = new Set(typeSizeItems).size;
      // const errorPosition = items.length - 1;

      if (uniqueItemsCount !== items.length) {
        const dupelicateIndices =
          getDupelicateIndexFromArrayList(typeSizeItems);

        dupelicateIndices.forEach(dupeIndex => {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Please enter correct price type.',
            path: [`priceList.${dupeIndex}.type`]
          });
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Please enter correct price size.',
            path: [`priceList.${dupeIndex}.size`]
          });
        });
      }
    })
});

export type NewMenuType = z.infer<typeof NewMenuSchema>;
