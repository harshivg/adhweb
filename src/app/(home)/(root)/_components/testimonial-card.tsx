import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
    name: string;
    designation: string;
    testimonial: string;
}

export const TestimonialCard = ({
    name,
    designation,
    testimonial,
}: TestimonialCardProps) => {
    return (
        <div className="bg-yellow-100 rounded-lg p-4 w-60 min-w-[250px] max-w-[300px] mx-2 h-[250px]">
            <div className="flex items-center mb-3">
                <Avatar className="mr-3">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-gray-500">{designation}</p>
                </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-normal">
                "{testimonial}"
            </p>
        </div>
    );
};
