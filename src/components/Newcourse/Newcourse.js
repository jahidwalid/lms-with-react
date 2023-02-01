import React from 'react';
import CourseItem from '../CourseItem/CourseItem';

const Newcourse = () => {
    return (
        <div>
            <div className='courseslider'>
             <div className="container">
            <h3 className='text-center'>HIGHEST SELLING COURSES</h3>
            <div className="divider"></div>
            </div>
          </div>
        <CourseItem/>
        </div>
      

    );
};

export default Newcourse;