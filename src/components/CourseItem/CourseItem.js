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
                    <div className="name-icon">
                        <div className="name">
                        <h6>{data.instructor}</h6>
                        </div>
                        <div className="icon">
                        <i class="fa-sharp fa-solid fa-cart-shopping"></i> <i class="fa-solid fa-heart"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-share-nodes"></i>
                        </div>
                    </div>
                    <p className='course-title'>{data.title}</p>
                    <p><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>({data.rating})</p>
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