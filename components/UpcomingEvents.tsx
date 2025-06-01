"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UpcomingEvents({ upcomingEvents }: { upcomingEvents: any[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [visibleItems, setVisibleItems] = useState(3);
    const carouselRef = useRef<HTMLDivElement>(null);

    const totalPages = Math.max(1, Math.ceil(upcomingEvents.length / visibleItems));

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleItems(1);
            } else if (window.innerWidth < 1024) {
                setVisibleItems(2);
            } else {
                setVisibleItems(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

  

    return (
        <div className="relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm depth-1 hover:depth-2"
                    onClick={prevSlide}
                    disabled={isAnimating}
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>
            </div>

            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm depth-1 hover:depth-2"
                    onClick={nextSlide}
                    disabled={isAnimating}
                >
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>

            <div ref={carouselRef} className="overflow-hidden px-4">                <div
                    className="flex transition-transform duration-1000 ease-out"
                    style={{
                        transform: `translateX(-${activeIndex * (100 / totalPages)}%)`,
                        width: `${totalPages * 100}%`,
                    }}
                >
                    {upcomingEvents.map((event) => (
                        <div key={event.id} className="px-3" style={{ width: `${100 / (visibleItems * totalPages)}%` }}>
                            <Card className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 h-full flex flex-col group">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={event.image || "/placeholder.svg"}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-2 right-2">
                                        <Badge className="bg-blue-600 hover:bg-blue-700 depth-1">{event.category}</Badge>
                                    </div>
                                </div>
                                <CardContent className="p-6 flex-1 flex flex-col">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                                    </div>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <CalendarDays className="mr-2 h-4 w-4" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Clock className="mr-2 h-4 w-4" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <MapPin className="mr-2 h-4 w-4" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href={`/events/${event.id}`}>View Details</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300 dark:bg-gray-700"
                            }`}
                        onClick={() => {
                            if (!isAnimating) {
                                setIsAnimating(true);
                                setActiveIndex(index);
                                setTimeout(() => setIsAnimating(false), 500);
                            }
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
