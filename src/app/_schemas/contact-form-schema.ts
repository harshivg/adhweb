import z from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    }),
    email: z.string().email({
        message: "Invalid email address",
    }),
    message: z.string().min(1, {
        message: "Message is required",
    }),
    role: z.string().min(1, {
        message: "Role is required",
    }),
})

export type ContactInfo = z.infer<typeof contactFormSchema>;