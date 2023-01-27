import React from 'react';
import './Hero.css';
import Navbar from './../Navbar/Navbar';
const hero = () => {
    return (
        <div className='hero-container'>
            <div className="container">
                <Navbar></Navbar>
                <div className="hero-content text-center">
                    <h5>ONLINE TEACHING MARKETPLACE & E-LEARNING PLATFORM</h5>
                    <h2>TEACH ANYTHING, LEARN ANYTIME</h2>
                    <p>Upload your course tutorial & become an online teacher. Earn as much as you can, it's FREE! Also, Browse our course categories where you can develop your skills anytime from the best professionals.</p>
                    <div className="hero-btn">
                        <button className='btn btn-primary m-2'>Start Teaching</button>
                        <button className='btn btn-primary m-2'>Start Learning</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default hero;