import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  date: z.date({
    required_error: "Date is required",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  materialName: z.string().min(2, {
    message: "Material name must be at least 2 characters.",
  }),
  quantity: z.number().min(1, {
    message: "Quantity must be at least 1 kg.",
  }),
});
