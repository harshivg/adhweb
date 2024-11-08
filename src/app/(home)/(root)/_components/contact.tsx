"use client"
import ContactForm from "./contact-form";

export const Contact = () => {

    return (
        <div className="lg:flex">
            <div className="lg:w-1/2">
                <h1 className="text-4xl font-bold">
                    Join The Future
                </h1>
                <p className="text-slate-500">
                    Now that you know everything about Adhyayan, connect with us and join the future.
                </p>
            </div>
            <div 
                className="lg:w-1/2 text-white"
                id="contact"
            >
                <ContactForm/>
            </div>
        </div>
    );
}