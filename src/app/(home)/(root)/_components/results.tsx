"use client";
import { InfoCard } from "./info-card"

const results = [
    {
        title: "Heightened Focus",
        description: "Students have reported increased focus and attention span after taking our course.",
        image: "/focus.svg"
    },
    {
        title: "Long-Term Knowledge Retention",
        description: "93% students reported retention for longer periods with 59% boasting memory after exams as well.",
        image: "/grades.svg"
    },
    {
        title: "Time for personal interests",
        description: "7/10 students reported having more time for personal interests and hobbies.",
        image: "/sleep.svg"
    },
    {
        title: "Accelarated Academic Output",
        description: "94% students saw an increase in Productivity with 61% reporting significant improvement.",
        image: "/output.svg"
    },
    {
        title: "Boosted Learning Confidence",
        description: "93% students experienced increase in Confidence in their ability to learn, with 50% experiencing a significant increase.",
        image: "/confidence.svg"
    },
    {
        title: "Enhanced memory capacity",
        description: "",
        image: "/memory.svg"
    }
]

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