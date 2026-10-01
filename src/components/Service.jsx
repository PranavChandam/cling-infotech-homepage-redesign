import './Service.css';
import singh from "../assets/Rsingh.webp"
import Akgupta from "../assets/Akgupta.webp"
import Agupta from "../assets/Agupta.webp"
import t1 from "../assets/t1.webp"
import t2 from "../assets/t2.webp"
import t3 from "../assets/t3.webp"
function Service() {
    return (
        <div>

            {/* SERVICES */}

            <section className="services">

                <div className="section-title">
                    <h1>Services</h1>
                    <div className="title-line"></div>
                </div>

                <div className="service-container">

                    <div className="service-card">
                        <div className="service-icon">
                            📱
                        </div>

                        <div className="service-content">
                            <h2>App Development</h2>
                            <p>
                                Need custom app development services? We can help
                                you to take advantage of the rapidly growing segment
                                of mobile application development.
                            </p>
                        </div>
                    </div>


                    <div className="service-card">
                        <div className="service-icon">
                            🖥️
                        </div>

                        <div className="service-content">
                            <h2>Web Design</h2>
                            <p>
                                Don't let your website be just another URL on the
                                web! We never use a pre-designed template for your
                                website. All design layouts are developed from
                                ground up, meeting the exacting standards you demand.
                            </p>
                        </div>
                    </div>


                    <div className="service-card">
                        <div className="service-icon">
                            ⚙️
                        </div>

                        <div className="service-content">
                            <h2>ERPs</h2>
                            <p>
                                We help you to manage your business activities
                                by integrating your back and front office
                                applications.
                            </p>
                        </div>
                    </div>

                </div>

            </section>


            {/* LEADERSHIP TEAM */}

            <section className="leadership">

                <div className="section-title">
                    <h1>Meet Our Leadership Team</h1>
                    <div className="title-line"></div>
                </div>

                <div className="leadership-container">

                    <div className="leader-card">
                        <img src={singh} alt="Ramesh Singh" />

                        <h2>Ramesh Singh</h2>
                        <p>Co-founder & Director</p>
                    </div>


                    <div className="leader-card">
                        <img src={Agupta} alt="Ashi Gupta" />

                        <h2>Ashi Gupta</h2>
                        <p>Managing Director</p>
                    </div>


                    <div className="leader-card">
                        <img src={Akgupta} alt="Akshay Gupta" />

                        <h2>Akshay Gupta</h2>
                        <p>CEO</p>
                    </div>

                </div>

            </section>


            {/* TESTIMONIALS */}

            <section className="testimonials">

                <div className="section-title">
                    <h1>Testimonials</h1>
                    <div className="title-line"></div>
                </div>

                <p className="testimonial-intro">
                    Your Voice, Our Pride! Dive into the heartfelt accounts of our
                    valued patrons. From life-changing experiences to exceptional
                    service, their stories illuminate the essence of our commitment.
                    Join our family of satisfied customers and witness firsthand the
                    transformative power of our offerings. Your satisfaction is our
                    greatest achievement!
                </p>


                <div className="testimonial-container">

                    <div className="testimonial-card">

                        <img src={t1} alt="Praveen Shetty" />

                        <p>
                            Working with Cling Info Tech was a game-changer for our
                            business. Their expertise and dedication helped us achieve
                            remarkable results. I highly recommend them to anyone
                            looking for top-notch service.
                        </p>

                        <h2>Praveen Shetty</h2>

                    </div>


                    <div className="testimonial-card">

                        <img src={t2} alt="Swatee Agrawal" />

                        <p>
                            Cling Info Tech's professionalism and efficiency surpassed
                            our expectations, understanding our needs exceptionally
                            well. Rarely do we find such a reliable partner in today's
                            market. Their dedication sets them apart.
                        </p>

                        <h2>Swatee Agrawal</h2>

                        <span>Founder - Piaah.com</span>

                    </div>


                    <div className="testimonial-card">

                        <img src={t3} alt="Elizabeth Jean Thomas" />

                        <p>
                            Choosing Cling Info Tech was one of the best decisions we
                            made. Their team's creativity and strategic approach
                            transformed our vision into reality. I'm grateful for
                            their outstanding support and guidance throughout the
                            process.
                        </p>

                        <h2>Elizabeth Jean Thomas</h2>

                        <span>Founder - Speech Ally</span>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Service;