import { z } from "zod";

export const serviceValidation = {
  createService: z.object({
    title: z.string({ required_error: "Service title is required" }),
    description: z.string({ required_error: "Service description is required" }),
    category_id: z.string({ required_error: "Category ID is required" }),
    image: z.string().optional(),
    price: z.number({ required_error: "Price is required" }),
    document: z.string().optional(),
    location_id: z.string({ required_error: "Location ID is required" }),
  }),
};
