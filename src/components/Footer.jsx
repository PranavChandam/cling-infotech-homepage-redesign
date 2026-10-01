import './Footer.css';

import ClingLogo from '../assets/ClingLogo.webp';

function Footer() {
    return (
        <footer className="footer">


            <div className="footer-header">

                <img
                    src={ClingLogo}
                    alt="Cling Infotech"
                    className="footer-logo"
                />

                <div className="social-links">

                    <a href="#" aria-label="Instagram">
                        <span>◎</span>
                    </a>

                    <a href="#" aria-label="LinkedIn">
                        <span>in</span>
                    </a>

                </div>

            </div>



            <div className="footer-top">


                <div className="footer-company">

                    <h2>Cling Info Tech Works Private Limited</h2>

                    <h3>Address</h3>

                    <h4>Head Office Noida</h4>

                    <p>
                        130, I31, I32, 2nd Floor, Wave Galleria, Wave City,
                        NH-24, Noida, Uttar Pradesh - 201015
                    </p>

                    <h4>Pune Office Address</h4>

                    <p>
                        2nd Floor, Raj Square, Pashan - Sus Rd,
                        near Abhinav kala college, opposite Reliance Fresh,
                        Sutarwadi, Pashan, Pune, Maharashtra - 411021
                    </p>

                    <h4>Moradabad Office Address</h4>

                    <p>
                        2/652, Avas Vikas, Buddhi Vihar
                        <br />
                        Moradabad, UP - 244001
                    </p>

                    <div className="footer-contact">
                        <p>🔴 Maharashtra, Uttar Pradesh</p>
                        <p>📞 +91 8264469132</p>
                        <p>✉ info@clinginfotech.com</p>
                    </div>

                </div>



                <div className="footer-links">

                    <h2>Quick Links</h2>

                    <a href="#">Home</a>
                    <a href="#">3D Videos</a>
                    <a href="#">AI/ML</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Achievements</a>
                    <a href="#">Team</a>
                    <a href="#">Career</a>
                    <a href="#">Sitemap</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cancellation & Refund Policy</a>
                    <a href="#">Terms and Conditions</a>

                </div>



                <div className="footer-services">

                    <h2>Services</h2>

                    <a href="#">App Development</a>
                    <a href="#">Website Designing</a>
                    <a href="#">Web Design</a>
                    <a href="#">Digital Marketing</a>
                    <a href="#">Social Media Marketing</a>
                    <a href="#">IT Team for Entrepreneurship</a>
                    <a href="#">Career Counselling</a>
                    <a href="#">ERPs</a>

                </div>

            </div>



            <div className="footer-bottom">

                <p>
                    Copyright © Cling Infotech All Rights Reserved
                </p>

            </div>

        </footer>
    );
}

export default Footer;