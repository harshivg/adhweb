"use client";
import { ContactFormHandler } from "@/app/_actions/contact-form-handler";
import { ContactFormState, StringMap, StringToBooleanMap } from "@/app/_types/contact-form";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ContactFormSubmit from "./contact-form-submit";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, ContactInfo } from "@/app/_schemas/contact-form-schema";
import { convertZodErrors } from "@/app/_utils/errors";
import { useFormState } from "react-dom";

const initialState : ContactFormState<ContactInfo> = {};
const initialData: ContactInfo = {
    name: "",
    email: "",
    message: "",
    role: ""
}

export default function ContactForm() {

    const [serverState, formAction] = useFormState(ContactFormHandler, initialState);

    const [blurs, setBlurs] = useState<StringToBooleanMap>(serverState.blurs || {});
    const [errors, setErrors] = useState<StringMap>(serverState.errors || {});
    const [formData, setFormData] = useState<ContactInfo>(serverState.data || initialData);


    useEffect(() => {
        if(serverState.successMsg){
            toast.success(serverState.successMsg);
            setBlurs({});
        }
        else if(serverState.errors){
            toast.error("Form submission failed");
        }

        if(serverState.data){
            setFormData(serverState.data);
        }
    }, [serverState]);

    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setBlurs((prev) => ({ ...prev, [name]: true }));
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => {
            const updatedData = ({ ...prev, [name]: value })
            const validated = contactFormSchema.safeParse(updatedData);

            if(validated.success){
                setErrors({});
            }
            else{
                const errors = convertZodErrors(validated.error);
                setErrors(errors);
            }

            return updatedData;
        });

    }

    return (
        <form 
            action={formAction} 
            className="flex flex-col gap-y-4 w-full"
        >
            <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                    type="text" 
                    name="name"
                    id="name"
                    value={formData.name} 
                    className="rounded-none bg-slate-700 border-none"
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                    aria-required
                    placeholder="Your Name"
                />
                {blurs.name && errors?.name && <p>{errors?.name}</p>}
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                    type="email" 
                    name="email"
                    id="email" 
                    value={formData.email}
                    className="rounded-none bg-slate-700 border-none"
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                    aria-required
                    placeholder="Your Email"
                />
                {blurs.email && errors?.email && <p>{errors?.email}</p>}
            </div>
            <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                    name="message" 
                    id="message"
                    value={formData.message}
                    className="rounded-none bg-slate-700 border-none"
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                    aria-required
                    placeholder="What would you like to know?"
                />
                {blurs.message && errors?.message && <p>{errors?.message}</p>}
            </div>
            <div>
                <Label htmlFor="role">Role</Label>
                <Input 
                    type="text" 
                    name="role"
                    id="role" 
                    value={formData.role}
                    className="rounded-none bg-slate-700 border-none"
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                    aria-required
                    placeholder="Student"
                />
                {blurs.role && errors?.role && <p>{errors?.role}</p>}
            </div>

            <ContactFormSubmit />
        </form>
    )
}