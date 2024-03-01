import React from 'react';
import '../css/Footer.css'; // Import CSS file for additional styling
import companyImage from '../images/footerlogo.webp'; // Import company image
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// using react bootstrap

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>Transforming Enterprises
                            with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
                    </div>
                    <div className="col-md-4 foot">
                        <h5>Contact Us</h5>
                        <p>Email: bluetickconsultants.com</p>
                        <p>Phone: +1234567890</p>
                    </div>
                    <div className="col-md-4 foot">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled list">
                            <li><a href="https://www.facebook.com/bluetickconsultants/">Facebook</a></li>
                            <li><a href="https://twitter.com/BluetickConsult">Twitter</a></li>
                            <li><a href="https://www.instagram.com/bluetickconsultants/">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/company/bluetick-consultants">LimkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-center logo">
                    <img src={companyImage} alt="Company Logo" className="company-logo" />
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center">&copy; 2024 BlueTick Consultants. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
// exporting component
