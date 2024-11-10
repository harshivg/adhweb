import { studentTestimonials, teacherTestimonials } from "@/app/data/testimonials";
import AutoScrollList from "./autoscroll-list";
import { ImageCard } from "./image-card";
import { TestimonialCard } from "./testimonial-card";

export const Testimonials = () => {
    return (
        <div className="w-full">
            <div className="mb-10">
                <h1 className="pl-20 lg:pl-40 lg:pr-40 font-bold text-4xl mb-6">
                    Student Testimonials
                </h1>
                <div className="md:hidden overflow-x-scroll flex gap-4">
                    {
                        studentTestimonials.map((testimonial, index) => {
                            return (
                                <div key={index}>
                                    <TestimonialCard
                                        name={testimonial.name}
                                        designation={testimonial.designation}
                                        testimonial={testimonial.testimonial}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
                <div className="hidden md:block">
                    <AutoScrollList items={studentTestimonials} />
                </div>
            </div>
            <div>
                <h1 className="pl-20 lg:pl-40 lg:pr-40 font-bold text-4xl mt-16 mb-6">
                    Teacher Testimonials
                </h1>
                <div className="md:hidden overflow-x-scroll flex gap-4">
                    {
                        teacherTestimonials.map((testimonial, index) => {
                            return (
                                <div key={index}>
                                    <TestimonialCard
                                        name={testimonial.name}
                                        designation={testimonial.designation}
                                        testimonial={testimonial.testimonial}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
                <div className="hidden md:block">
                    <AutoScrollList items={teacherTestimonials} />
                </div>
            </div>
            <div className="mt-18 m-8 bg-[#FFE490] p-12 rounded-lg max-w-full">
                <h1 className="uppercase flex justify-center items-center text-3xl md:text-5xl font-bold mb-4">
                    From cbse to upsc
                </h1>
                <div className="flex flex-col md:flex-row md:justify-around">
                    <div className="w-full sm:p-8 md:w-3/5 mr-8 mb-8">
                        <p className="mb-4 md:mb-20">
                            "I cleared the highly competitive UPSC CAPF written exam on my first attempt with just 3-4 months of focused preparation. Adhyayan's systematic approach transformed my study routine. Their evidence-based techniques like the Feynman method for concept mastery, structured Pomodoro sessions for time management, and active recall practices significantly enhanced my retention. The practical, science-backed methods were instrumental in achieving this milestone. For anyone seeking efficient and proven study strategies, Adhyayan's approach delivers remarkable results." - Jaya Meena
                        </p>
                        <p className="hidden md:block text-2xl">
                            If you&apos;re a learner, this course is for you!
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <ImageCard image="/adhyayan-logo.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}