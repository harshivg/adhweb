import Image from "next/image"

interface ImageCardProps {
    image: string;
    width?: number;
    height?: number;
}

export const ImageCard = ({
    image,
    height = 350,
    width = 200,
}: ImageCardProps) => {
    return (
        <Image 
            src={image}
            alt="image"
            height={height}
            width={width}
            className="rounded-lg bg-white border-2 border-white"
        />
    )
}