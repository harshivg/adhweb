"use client"
import { routes } from "@/app/data/navbar-routes";
import Image from "next/image";
import Link from "next/link";


export const Sidebar = () => {
    return ( 
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-lg">
            <div className="p-6 flex items-center justify-center">
                <Image 
                    src="/adhyayan-logo.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    loading="lazy"
                    className="rounded-full border-2 border-white shadow-md"
                />
            </div>
            <div className="flex flex-col w-full gap-y-4 pl-4">
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
        </div>
    );
}