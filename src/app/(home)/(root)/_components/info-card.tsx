import Image from "next/image";

interface InfoCardProps {
    title: string,
    description: string,
    image: string
}

export const InfoCard = ({
    title,
    description,
    image
}: InfoCardProps) => {

    
    const formatDescription = (description: string) => {
        return description.split('').map((char, index) => {
            if (/[^a-zA-Z]/.test(char)) 
            {
                return (
                    <span key={index} className="text-yellow-500">
                        {char}
                    </span>
                );
            }
            return char;
        });
    }
    

    return (
        <div className="w-full rounded-lg flex items-center justify-between bg-black p-4 h-[250px] shadow-sm border-2 border-black border-b-slate-700">
            <div className="text-white w-full">
            <h2 className="text-4xl font-bold mb-4 w-full">
                {title}
            </h2>
            <p className="w-3/5 text-xl">
                {formatDescription(description)}
            </p>
            </div>
            <div>
            <Image 
                src={image}
                alt={image}
                width={100}
                height={100}
            />
            </div>
        </div>
    )
}