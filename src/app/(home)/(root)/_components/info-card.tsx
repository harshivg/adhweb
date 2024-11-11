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
        <div className="w-full rounded-lg flex flex-col md:flex-row items-center justify-evenly bg-black p-4 md:h-[250px] shadow-sm border-2 border-black mb-8">
            <div className="text-white w-full">
                <h2 className="text-2xl md:text-4xl font-bold mb-8 w-full">
                    {title}
                </h2>
                <p className="md:w-3/5 text-xl mb-4">
                    {formatDescription(description)}
                </p>
            </div>
            <div className="flex items-center justify-center">
                <Image 
                    className="md:hidden h-auto"
                    src={image}
                    alt={image}
                    width={100}
                    height={100}
                />
                <Image 
                    className="hidden md:block h-auto"
                    src={image}
                    alt={image}
                    width={150}
                    height={150}
                />
            </div>
        </div>
    )
}