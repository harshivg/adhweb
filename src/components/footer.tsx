import Link from "next/link"

const milestones = [
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Upskill your students",
        href: "/upskill",
    },
    {
        title: "Our Course",
        href: "/course",
    },
    {
        title: "Workshops",
        href: "/workshops",
    }
]

const legal = [
    {
        title: "Privacy Policy",
        href: "/privacy",
    },
    {
        title: "Cookie Policy",
        href: "/cookie",
    },
    {
        title: "Imprint",
        href: "/imprint",
    },
]

const products = [
    {
        title: "For Students",
        href: "/students",
    },
    {
        title: "For Schools",
        href: "/schools",
    },
    {
        title: "For Institutions",
        href: "/institutions",
    },
    {
        title: "For Companies",
        href: "/companies",
    }
]

const contact = [
    {
        title: "Book A Demo",
        href: "/demo",
    },
    {
        title: "FAQs",
        href: "/faqs",
    },
]

const socials = [
    {
        title: "Instagram",
        href: "https://www.instagram.com/adhyayan.co/",
        img: "/footer/instagram.svg",
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/sahil-dewan-0442a522a/",
        img: "/footer/linkedin.svg",
    },
]

export const Footer = () => {
    return (
        <div className="flex justify-around p-4 lg:p-8">
            <div className="hidden md:block">
                <h1 className="uppercase text-4xl font-bold">
                    Adhyayan
                </h1>
                {/* get svg */}
            </div>
            <div className="grid grid-cols-2 gap-12">
                <div className="col-span-1">
                    <h3 className="text-blue-800 text-xl font-semibold">
                        Milestone
                    </h3>
                    <div className="flex flex-col gap-y-4">
                        {
                            milestones.map((milestone, index) => {
                                return (
                                    <Link 
                                        href={milestone.href}
                                        key={index}
                                    >
                                        {milestone.title}
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <h3 className="text-blue-800 text-xl font-semibold mt-8">
                        Socials
                    </h3>
                    <div className="flex flex-col gap-y-4">
                        {
                            socials.map((item, index) => {
                                return (
                                    <Link 
                                        href={item.href}
                                        key={index}
                                    >   
                                        <div className="flex items-center">
                                            <img 
                                                src={item.img}
                                                alt={item.title}
                                                className="w-5 h-5 mr-2"
                                            />
                                            {item.title}
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-span-1">
                    <h3 className="text-blue-800 text-xl font-semibold">
                        Products
                    </h3>
                    <div className="flex flex-col gap-y-4">
                        {
                            products.map((product, index) => {
                                return (
                                    <Link 
                                        href={product.href}
                                        key={index}
                                    >
                                        {product.title}
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <h3 className="text-blue-800 text-xl font-semibold mt-8">
                        Contact
                    </h3>
                    <div className="flex flex-col gap-y-4">
                        {
                            contact.map((item, index) => {
                                return (
                                    <Link 
                                        href={item.href}
                                        key={index}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <h3 className="text-blue-800 text-xl font-semibold mt-8">
                        Legal
                    </h3>
                    <div className="flex flex-col gap-y-4">
                        {
                            legal.map((item, index) => {
                                return (
                                    <Link 
                                        href={item.href}
                                        key={index}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}