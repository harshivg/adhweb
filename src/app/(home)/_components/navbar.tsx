import Link from "next/link";
import { NavbarRoutes } from "./navbar-routes";
import Logo from "@/components/logo";

export const Navbar = () => {
    return(
    <div className="w-full h-full flex items-center bg-black">
        <div className="p-1">
            <Logo 
                width={80} 
                height={80}
            />
        </div>
        <NavbarRoutes />
        <div className="pl-4 pr-4">
            <Link 
                href="/contact"
                className="text-white font-bold"
            >
                Contact Us
            </Link>
            {/* add svg */}
        </div>
    </div>
    );
}
 
