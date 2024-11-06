import AutoScrollList from "./autoscroll-list";
import { TestimonialCard } from "./testimonial-card";

const studentTestimonials = [
    {
        name: "John Doe",
        designation: "Writer",
        testimonial: "This is the best platform I have ever used. I have learnt so much from the teachers and the students. I would recommend this to anyone who is looking to learn."
    },
    {
        name: "Jane Doe",
        designation: "Artist",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Alice Doe",
        designation: "Designer",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Bob Doe",
        designation: "Developer",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Charlie Doe",
        designation: "Engineer",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "David Doe",
        designation: "Doctor",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Eve Doe",
        designation: "Nurse",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Frank Doe",
        designation: "Teacher",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Grace Doe",
        designation: "Student",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Harry Doe",
        designation: "Professor",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    }
]

const teacherTestimonals = [
    {
        name: "John Doe",
        designation: "Writer",
        testimonial: "This is the best platform I have ever used. I have learnt so much from the teachers and the students. I would recommend this to anyone who is looking to learn."
    },
    {
        name: "Jane Doe",
        designation: "Artist",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Alice Doe",
        designation: "Designer",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Bob Doe",
        designation: "Developer",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Charlie Doe",
        designation: "Engineer",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "David Doe",
        designation: "Doctor",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Eve Doe",
        designation: "Nurse",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Frank Doe",
        designation: "Teacher",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Grace Doe",
        designation: "Student",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    },
    {
        name: "Harry Doe",
        designation: "Professor",
        testimonial: "I have been using this platform for a few months now and I have to say that I am very impressed. The teachers are very knowledgeable and the students are very supportive."
    }
]

export const Testimonials = () => {
    return (
        <div className="w-full">
            <div className="mb-10">
                <h1 className="pl-40 pr-40 font-bold text-4xl mb-6 bg-red">
                    Student Testimonials
                </h1>
                <AutoScrollList items={studentTestimonials} />
            </div>
            <div>
                <h1 className="pl-40 pr-40 font-bold text-4xl mb-6">
                    Teacher Testimonials
                </h1>
                <AutoScrollList items={teacherTestimonals} />
            </div>
        </div>
    );
}