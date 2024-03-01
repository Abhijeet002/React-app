import React from 'react';
import '../css/ContactSection.css'; // Import CSS file for styling

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-form">
                            <h2 className="section-title">Let's connect</h2>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Contact Number" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-form">
                            <h2 className="section-title">Tell us</h2> {/* Added 'Tell us' heading */}
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary contact-submit">Submit Form</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
