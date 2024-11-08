"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function ContactFormSubmit() {
    const { pending } = useFormStatus();

    return (
        <Button 
            type="submit" 
            disabled={pending} 
            className="w-full uppercase mt-8 p-8 bg-yellow-400 text-black text-xl font-bold flex items-center justify-center rounded-none hover:bg-yellow-500"
        >
            Let&apos;s get started
        </Button>
    )

}