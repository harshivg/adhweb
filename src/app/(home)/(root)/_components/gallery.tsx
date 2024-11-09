"use client";
const schools = [
    {
        name: "GD Goenka",
        images: ["/adhyayan-logo.svg", "/adhyayan-logo.svg", "/adhyayan-logo.svg", "/adhyayan-logo.svg", "/adhyayan-logo.svg"],
    },
    {
        name: "DPS",
        images: ["/adhyayan-logo.svg", "/adhyayan-logo.svg", "/adhyayan-logo.svg"],
    },
    {
        name: "Ryan International",
        images: ["/adhyayan-logo.svg", "/adhyayan-logo.svg"],
    },
    {
        name: "Amity International",
        images: ["/adhyayan-logo.svg"]
    },
]

import { useState } from 'react';
import { ImageCard } from './image-card';
import { cn } from '@/lib/utils';

export const Gallery = () => {
    const [selectedSchool, setSelectedSchool] = useState(schools[0]);

    return (
        <div className="bg-black text-background w-full">
            <h1 className="font-bold text-5xl mb-3">Gallery</h1>
            <p className="text-slate-600 mb-5 w-3/5">
                Step inside our gallery of partner schools. Schools that have taken the first step in upgrading their student&apos;s learning experience.
            </p>

            <div className="flex items-center gap-x-8">
                {schools.map((school, index) => (
                    <button
                        key={index}
                        className={cn(
                            "p-2 uppercase border-yellow-400 text-white border-2",
                            selectedSchool.name === school.name && "bg-yellow-400 text-black"
                        )}
                        onClick={() => setSelectedSchool(school)}
                    >
                        {school.name}
                    </button>
                ))}
            </div>

            <div className="mt-16 flex gap-4 justify-evenly">
                {selectedSchool.images.length > 0 ? (
                    selectedSchool.images.map((image, index) => (
                        <ImageCard 
                            key={index}
                            image={image}
                        />
                    ))
                ) : (
                    <p>No images available for {selectedSchool.name}</p>
                )}
            </div>
        </div>
    );
}
