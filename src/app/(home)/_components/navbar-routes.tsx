import Link from "next/link"

const routes = [
    {
        title: "Upskill your students",
        href: "/upskill",
    },
    {
        title: "Our Course",
        href: "/course",
    },
    {
        title: "Testimonials",
        href: "/testimonials",
    },
    {
        title: "Workshops",
        href: "/workshops",
    }
]

export const NavbarRoutes = () => {
    return (
        <>
            <div className="flex items-center justify-end gap-6 bg-white w h-[70px] pr-12 w-4/5">
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
        </>
    )
}