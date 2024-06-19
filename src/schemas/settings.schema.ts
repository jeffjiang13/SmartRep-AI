import { z } from 'zod';

export const MAX_UPLOAD_SIZE = 1024 * 1024 * 2; // 2MB
export const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];

export type DomainSettingsProps = {
  domain?: string;
  image?: any;
  welcomeMessage?: string;
  background?: string;
  textColor?: string;
};

export type HelpDeskQuestionsProps = {
  question: string;
  answer: string;
};

export type AddProductProps = {
  name: string;
  image: any;
  price: string;
};

export type FilterQuestionsProps = {
  question: string;
};

export const AddDomainSchema = z.object({
  domain: z
    .string()
    .min(4, { message: 'A domain must have at least 4 characters' })
    .refine(
      (value) =>
        /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,3}$/.test(value ?? ''),
      'This is not a valid domain'
    ),
  image: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_UPLOAD_SIZE, {
      message: 'Your file size must be less than 2MB',
    })
    .refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
      message: 'Only JPG, JPEG & PNG are accepted file formats',
    }),
});

export const DomainSettingsSchema = z
  .object({
    domain: z
      .string()
      .min(4, { message: 'A domain must have at least 4 characters' })
      .refine(
        (value) =>
          /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,3}$/.test(value ?? ''),
        'This is not a valid domain'
      )
      .optional()
      .or(z.literal('').transform(() => undefined)),
    image: z.any().optional(),
    welcomeMessage: z
      .string()
      .min(6, 'The message must be at least 6 characters')
      .optional()
      .or(z.literal('').transform(() => undefined)),
    background: z
      .string()
      .optional()
      .or(z.literal('').transform(() => undefined)),
    textColor: z
      .string()
      .optional()
      .or(z.literal('').transform(() => undefined)),
  })
  .refine(
    (schema) => {
      if (schema.image?.length) {
        if (
          ACCEPTED_FILE_TYPES.includes(schema.image?.[0].type!) &&
          schema.image?.[0].size <= MAX_UPLOAD_SIZE
        ) {
          return true;
        }
      }
      if (!schema.image?.length) {
        return true;
      }
    },
    {
      message:
        'The file must be less than 2MB, and only PNG, JPEG & JPG files are accepted',
      path: ['image'],
    }
  );

export const HelpDeskQuestionsSchema = z.object({
  question: z.string().min(1, { message: 'Question cannot be left empty' }),
  answer: z.string().min(1, { message: 'Answer cannot be left empty' }),
});

export const FilterQuestionsSchema = z.object({
  question: z.string().min(1, { message: 'Question cannot be left empty' }),
});

export const AddProductSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'The name must have at least 3 characters' }),
  image: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_UPLOAD_SIZE, {
      message: 'Your file size must be less than 2MB',
    })
    .refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
      message: 'Only JPG, JPEG & PNG are accepted file formats',
    }),
  price: z.string(),
});
