import React from 'react';
import Hero from '../components/Hero';
import CourseGrid from '../components/CourseGrid';
// import Testimonials from '../components/Testimonials'; // Will implement later or placeholder
import Testimonials from '../components/Testimonials'; // Will implement later or placeholder

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <CourseGrid />
            <Testimonials />
        </>
    );
};

export default HomePage;
