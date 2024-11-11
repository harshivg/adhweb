import { cn } from "@/lib/utils";
import Image from "next/image"

interface ImageCardProps {
    image: string;
    width?: number;
    height?: number;
}

export const ImageCard = ({
    image,
    height = 200,
    width = 200,
}: ImageCardProps) => {
    return (
        <Image 
            src={image}
            alt="image"
            height={height}
            width={width}
            className={cn(
                "rounded-lg bg-white border-2 border-white",
                `h-${height} w-${width}`
            )}
        />
    )
}