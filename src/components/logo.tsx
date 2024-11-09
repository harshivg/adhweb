import Image from "next/image";
import Link from "next/link";

const Logo = ({
    width = 100,
    height = 100,
} : {
    width?: number,
    height?: number,
}) => {
    return ( 
        <Link href="/">
            <Image 
                width={width} 
                height={height} 
                alt="logo" 
                src="/adhyayan-logo.svg"
            />
        </Link>
    );
}
 
export default Logo;