"use client";
import { results } from "@/app/data/results";
import { InfoCard } from "./info-card"
import Image from "next/image";

export const Results = () => {
    return (
        <div className="w-full">
            <h1 className="text-5xl font-bold flex justify-between">
                Our Results
                    <Image
                        src="/results/StarFour.svg"
                        alt="star"
                        width={40}
                        height={40}
                        loading="lazy"
                    />
                    <Image
                        src="/results/StarFour-1.svg"
                        alt="star"
                        width={40}
                        height={40}
                        loading="lazy"
                    />
            </h1>   
            <div className="flex flex-col gap-y-3 mt-8">
                {
                    results.map((result, index) => {
                        return (
                            <section key={index} className="sticky top-20">
                                <InfoCard 
                                    title={result.title}
                                    description={result.description}
                                    image={result.image}
                                />
                            </section>
                        )
                    })
                }
            </div>
        </div>
    );
}