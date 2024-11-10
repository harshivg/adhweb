"use client";
import { results } from "@/app/data/results";
import { InfoCard } from "./info-card"

export const Results = () => {
    return (
        <div className="w-full">
            <h1 className="text-5xl font-bold">
                Our Results So Far
            </h1>
                    {/* add svg */}
                    
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