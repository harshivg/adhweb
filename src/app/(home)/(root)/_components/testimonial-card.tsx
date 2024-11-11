import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
    name: string;
    designation: string;
    testimonial: string;
    image?: string;
}

export const TestimonialCard = ({
    name,
    designation,
    testimonial,
    image = "",
}: TestimonialCardProps) => {
    const getInitials = (name: string) => {
        const [firstName, lastName] = name.split(" ");
        if(firstName && lastName) {
            return `${firstName[0]}${lastName[0]}`;
        }

        return `${firstName[0]}`;
    }

    const [position, school] = designation.split(",");

    return (
        <div className="bg-yellow-100 rounded-lg p-4 w-60 min-w-[250px] max-w-[300px] mx-2 h-[300px]">
            <div className="flex items-center mb-3">
                <Avatar className="mr-3">
                    <AvatarImage src={image} alt="@shadcn" />
                    <AvatarFallback>{getInitials(name)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <h3 className="font-semibold">{name}</h3>
                    <div className="text-sm text-gray-500 text-wrap">{position}</div>
                    <div className="text-sm text-gray-500 text-wrap">{school}</div>
                </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-normal">
                "{testimonial}"
            </p>
        </div>
    );
};
