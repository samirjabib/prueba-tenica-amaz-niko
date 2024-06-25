import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  pickUpTime: z.date({ message: "Pick-up time is required" }),
  address: z.string().nonempty({
    message: "Address is required",
  }),
  material: z.string().nonempty({
    message: "Material is required",
  }),
  quantity: z.string().nonempty({ message: "Quantity is required" }),
});

export type FormData = z.infer<typeof formSchema>;
