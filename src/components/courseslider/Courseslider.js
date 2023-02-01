import React from 'react';
import CourseItem from '../CourseItem/CourseItem';
import "./CourseSlider.css"

const courseslider = () => {
    return (
       <div>
         <div className='courseslider'>
            <div className="container">
                <h3 className='text-center'>NEWLY LAUNCHED COURSES</h3>
                <p>All / Marketplace / SEO & Digital Marketing / Design & Development / Academic & Fundamentals / Video Editing / Religion / Others / Instructory</p>
                <div className="divider"></div>
            </div>
        </div>
        <CourseItem/>
       </div>
    );
};

export default courseslider;