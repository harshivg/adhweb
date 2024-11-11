"use server";
import { contactFormSchema, ContactInfo } from "../_schemas/contact-form-schema";
import { ContactFormState, StringMap } from "../_types/contact-form";
import { convertZodErrors } from "../_utils/errors";

export const ContactFormHandler = async (
    prevState: ContactFormState<StringMap>,
    formData: FormData
): Promise<ContactFormState<ContactInfo>> => {
    console.log("form data", formData);

    const unvalidatedContactForm:StringMap = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
        role: formData.get("role") as string,
    };

    const validatedContactForm = contactFormSchema.safeParse(unvalidatedContactForm);

    if(!validatedContactForm.success) {
        const errors = convertZodErrors(validatedContactForm.error);

        const contactData:ContactInfo = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
            role: formData.get("role") as string,
        };

        return { errors, data: contactData, blurs: {
            name: true,
            email: true,
            message: true,
            role: true
        }};
    }
    else{
        //add db call
        return { 
            successMsg: "Form submitted successfully", 
            errors: {}, 
            data: {
                name: '',
                email: '',
                message: '',
                role: '',
            }
        };
    }
}