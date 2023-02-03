import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div id='footer'>
            <div className="container">
                <div className="row">
                <div className="col-lg-3">
                    <div className="footer-logo">
                        <img src="https://instructory.net/assets/images/logo-new-white.png" alt="Logo" />
                        <p>Instructory is all about connecting & discovering talents, inspiring people and impact opportunities for millions of instructors!</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="use-link">
                        <h4>Useful Links</h4>
                        <div className='use-link-text-divider'></div>
                        <ul>
                            <li>Blog</li>
                            <li>Our Instructors</li>
                            <li>Our Learners</li>
                            <li>Become An Online Teacher</li>
                            <li>How it work</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="use-link">
                        <h4>Need Support</h4>
                        <div className='use-link-text-divider'></div>
                        <ul>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Legal</li>
                            <li>Become An Online Teacher</li>
                            <li>How it work</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="use-link">
                        <h4>About Instructory</h4>
                        <div className='use-link-text-divider'></div>
                        <ul>
                            <li>Our Story</li>
                            <li>Our Instructors</li>
                            <li>Our Learners</li>
                            <li>Become An Online Teacher</li>
                            <li>How it work</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <div className="copy-right">
            <p class="m-0 footer-text wow fadeInUp">© 2023 | Develop By <a href="https://jahidwalid.com" class="footer_link">Jahid Walid</a> | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;