
import React from "react";
import { courseData } from "@/components/CoursesComp/courseData";
import Hero from "@/components/CoursesComp/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Highlights from "@/components/CoursesComp/Highlights";
import Syllabus from "@/components/CoursesComp/Syllabus";
import CourseMentors from "@/components/CoursesComp/CourseMentors";
import MentorsFilmography from "@/components/CoursesComp/MentorsFilmography";
import Journey from "@/components/CoursesComp/Journey";
import CTA from "@/components/Home/CTA";
import FAQ from "@/components/CoursesComp/FAQ";
import StageUnrealSyllabus from "@/components/CoursesComp/StageUnrealSyllabus";



const CoursePage = ({ courseKey }) => {

    const course = courseData[courseKey];


    if (!course) {

        return (
            <div className="flex min-h-screen items-center justify-center bg-black text-white">

                <div className="text-center">

                    <h1 className="font-bebas text-4xl">
                        Course Not Found
                    </h1>

                    <p className="mt-2 font-onest text-white/50">
                        The requested course does not exist.
                    </p>

                </div>

            </div>
        );

    }


    return (
        <main className="bg-black text-white">
            <Navbar />
            <Hero course={course} />

            <Highlights course={course} />

            <Syllabus course={course} />
            {/* <StageUnrealSyllabus course={course} /> */}

            <CourseMentors course={course} />

            <MentorsFilmography course={course} />

            <Journey course={course} />
                  <FAQ course={course} />

            <CTA />

            <Footer />
        </main>
    );
};


export default CoursePage;