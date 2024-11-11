import Link from "next/link";
import Logo from "@/components/logo";
import { routes } from "@/app/data/navbar-routes";

export const Navbar = () => {
    return(
    <div className="w-full h-full flex items-center bg-black justify-between">
        <div className="p-1">
            <Logo 
                width={80} 
                height={80}
            />
        </div>
        <div className="hidden md:flex items-center justify-end md:gap-6 bg-white h-[70px] md:pr-12 pr-1 w-4/5">
                {
                    routes.map((route, index) => {
                        return (
                            <Link 
                                key={index}
                                href={route.href}
                                className="hover:text-yellow-500"
                            >
                                {route.title}
                            </Link>
                        )
                    })
                }
        </div>
        <div className="pl-4 pr-4">
            <Link 
                href="#contact"
                className="text-white font-bold"
            >
                Contact Us
            </Link>
            {/* add svg */}
        </div>
            {/* mobile sidebar */}
        {/* <div className="md:hidden">
                <MobileSidebar />
        </div> */}
    </div>
    );
}
 
