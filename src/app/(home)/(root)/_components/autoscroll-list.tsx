"use client";
import { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "./testimonial-card";

interface Testimonial {
    name: string;
    designation: string;
    testimonial: string;
    image?: string;
}

interface AutoScrollListProps {
    items: Testimonial[];
    scrollSpeed?: number;
    pauseDuration?: number;
}

const AutoScrollList = ({ 
    items, 
    scrollSpeed = 120, 
    pauseDuration = 2000 
}: AutoScrollListProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval: NodeJS.Timeout | undefined;

    const autoScroll = () => {
      if (container && !isHovered && !isScrolling) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; 
        }
      }
    };

    if (!isHovered && !isScrolling) {
      scrollInterval = setInterval(autoScroll, 15);  
    } else {
      clearInterval(scrollInterval);
    }

    return () => {
      clearInterval(scrollInterval);
    };
  }, [isHovered, isScrolling, scrollSpeed]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsScrolling(false);  
      }}
      onMouseLeave={() => setIsHovered(false)}
      onWheel={(e) => {
        if (!isHovered) {
          setIsScrolling(true);  
        }
      }}
      style={{
        display: "flex",
        overflowX: isHovered ? "auto" : "hidden",  
        whiteSpace: "nowrap",
        scrollBehavior: "smooth",  
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        cursor: isHovered ? "grab" : "auto",  
      }}
    >
      {[...items].map((item, index) => (
        <div key={index} style={{ minWidth: "300px" }}>
          <TestimonialCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default AutoScrollList;
