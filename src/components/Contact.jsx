import './Contact.css';

function Contact() {
    return (
        <section className="contact">

            <div className="contact-title">
                <h1>Contact Us</h1>
                <div className="title-line"></div>
            </div>

            <div className="contact-form">

                <h2>Send us a message</h2>

                <div className="form-row">

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" />
                    </div>

                </div>


                <div className="form-row">

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" />
                    </div>

                    <div className="form-group">
                        <label>Company</label>
                        <input type="text" />
                    </div>

                </div>


                <div className="message-group">
                    <label>Message</label>
                    <textarea></textarea>
                </div>


                <button type="button">Submit</button>

            </div>

        </section>
    );
}

export default Contact;