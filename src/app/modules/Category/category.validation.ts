import { z } from "zod";

export const categoryValidation = {
  createCategory: z.object({
    name: z.string({ required_error: "name is required" }),
    image: z.string().optional(),
    popular: z.boolean().nullable().optional(),
    featured: z.boolean().nullable().optional(),
    latest: z.boolean().nullable().optional(),
  }),
};

// export type TCategoryInput = z.infer<typeof categoryValidation>;
