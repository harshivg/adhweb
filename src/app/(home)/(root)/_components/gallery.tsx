"use client";

import { useEffect, useRef, useState } from 'react';
import { ImageCard } from './image-card';
import { cn } from '@/lib/utils';
import { schools } from '@/app/data/schools';

export const Gallery = () => {
    const [selectedSchool, setSelectedSchool] = useState(schools[0]);
    const videoRefs = useRef<HTMLVideoElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const video = entry.target as HTMLVideoElement;

                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }
        , { threshold: 0.5 });

        videoRefs.current?.forEach((video) => {
            observer.observe(video);
        });

        return () => {
            videoRefs.current?.forEach((video) => {
                if(video) observer.unobserve(video);
            });
        }

    }, [selectedSchool])
    
    return (
        <div className="bg-black text-background w-full pt-8 pb-8">
            <h1 className="font-bold text-5xl mb-3">Gallery</h1>
            <p className="text-slate-600 mb-5 md:w-3/5">
                Step inside our gallery of partner schools. Schools that have taken the first step in upgrading their student&apos;s learning experience.
            </p>

            <div className="flex items-center gap-x-8 overflow-x-scroll">
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

            <div className="mt-16 flex gap-4 justify-evenly overflow-x-auto">
                {
                    selectedSchool.videos.length > 0 ? (
                        selectedSchool.videos.map((video, index) => (
                        <video 
                            width="320" 
                            height="240" 
                            controls 
                            key={`${selectedSchool.name}-${index}`} 
                            ref={(el) => {
                                if (el) {
                                    videoRefs.current![index] = el;
                                }
                            }}
                        >
                                <source src={video} type="video/mp4"></source>
                        </video>
                        ))
                    ) : (
                        selectedSchool.images.map((image, index) => (
                            <ImageCard
                                key={index}
                                image={image}
                                height={200}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
}
