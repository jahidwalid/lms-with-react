import React from 'react';
import CourseItem from '../CourseItem/CourseItem';
import "./Title.css";

const Titlecourse = (props) => {
    return (
       <div>
         <div className='courseslider'>
         <div className="container">
            <h3 className='text-center'>{props.title}</h3>
            <p>All / Marketplace / SEO & Digital Marketing / Design & Development / Academic & Fundamentals / Video Editing / Religion / Others / Instructory</p>
            <div className="divider"></div>
         </div>
        </div>
        <CourseItem/>
       </div>
    );
};

export default Titlecourse;