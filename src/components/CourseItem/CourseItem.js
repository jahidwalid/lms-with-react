import React from 'react';
import './CourseItem.css';
import courselist from "../../Data/CourseData.js"

const CourseItem = () => {
    return (
        <div id='course-item'>
            <div className="container">
               <div className="row">
               {
                courselist.map(data=>
                <div className='col-md-4 col-xl-3 col-md-6'>
                    <div className="course-item-box">
                    <img className='' src={data.image} alt="" />
                    <div className="course-item-box-bottom">
                    <h6>{data.instructor}</h6>
                    <p className='course-title'>{data.title}</p>
                    <p>Rating {data.rating}</p>
                    <div className="price-and-btn d-flex">
                    <h5>৳{data.price}</h5>
                    <button>BUY NOW</button>
                    </div>
                    </div>
                    </div>
                </div>
                )
               }
               </div>
            </div>
        </div>
    );
};

export default CourseItem;