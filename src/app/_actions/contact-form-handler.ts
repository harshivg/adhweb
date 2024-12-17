"use server";
import { contactFormSchema, ContactInfo } from "../_schemas/contact-form-schema";
import { ContactFormState, StringMap } from "../_types/contact-form";
import { convertZodErrors } from "../_utils/errors";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseKey = process.env.SUPABASE_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

export const ContactFormHandler = async (
    prevState: ContactFormState<StringMap>,
    formData: FormData
): Promise<ContactFormState<ContactInfo>> => {
    
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
        const {name, email, message, role} = validatedContactForm.data;

        try{
            const { data, error } = await supabase
                .from('contact-form')
                .insert([
                    { name, email, message, role }
                ])
            
            if(error){
                // console.log(data, error);
                return {
                    successMsg: "Form submission failed",
                    errors: {},
                    data: {
                        name: name,
                        email: email,
                        message: message,
                        role: role,
                    }
                }
            }

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
        catch(error){
            // console.log("2", error);
            return {
                successMsg: "Form submission failed",
                errors: {},
                data: {
                    name: name,
                    email: email,
                    message: message,
                    role: role,
                }
            }
        }
    }
}