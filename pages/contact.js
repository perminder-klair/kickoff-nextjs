import React from 'react';

import Layout from '../components/Layout';

const TITLE = 'Contact Me';

export default () => (
    <Layout title={TITLE}>
        <section className="page-header" style={{ backgroundImage: 'url(static/img/page_header_placeholder.jpg)' }}>
            <div className="page-head-inside">
                <div className="container">
                    <h1 className="font-reg">{TITLE}</h1>
                    <p className="font-reg">
                        Use the <strong>contact form</strong> below to get in touch, I will reply as soon as possible and don&#39;t be afraid to just send me a <strong>&ldquo;Hi!&ldquo;</strong>. I look forward to <strong>hearing</strong> from you!
                    </p>
                </div>
            </div>
        </section>

        <section className="page-section contact-page">
            <div className="container">

                <div className="row">
                    <div className="col-xlarge-4">
                        <h1 className="font-reg">Let&#39;s Get In Touch</h1>
                        <p>Do you need a website, have a question or comment? Please feel free to send me an email or fill in this handy contact form. My aim is to reply within 24 hours.</p>
                        <table id="contact-details" className="font-reg">
                            <tbody>
                                <tr>
                                    <td><i className="fa fa-twitter" /></td>
                                    <td><a href="https://twitter.com/pinku1">@pinku1</a></td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-envelope" /></td>
                                    <td><a href="mailto:gmail@klair.us">gmail@klair.us</a></td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-phone" /></td>
                                    <td><a href="tel:00447411911347">+44 7411911347</a></td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-clock-o" /></td>
                                    <td><span>9am to 9pm</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-xlarge-8">
                        <div id="success-message" className="notification"><p className="font-reg" /></div>
                        <div id="error-message" className="notification"><p className="font-reg" /></div>
                        <form id="contact-form" method="post" name="contact-form">
                            <div className="row">
                                <div className="col-xlarge-6 col-medium-6">
                                    <input type="text" className="contact-input font-reg" name="contact_name" id="contact_name" value="" placeholder="Your Name" tabIndex="1" />
                                </div>
                                <div className="col-xlarge-6 col-medium-6">
                                    <input type="email" className="contact-input font-reg" name="contact_email" id="contact_email" value="" placeholder="Your Email" tabIndex="2" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xlarge-12">
                                    <textarea name="contact_message" id="contact_message" className="contact-text font-reg" tabIndex="4" placeholder="Your Message" />
                                </div>
                            </div>
                            <input type="submit" className="primary-button font-reg hov-bk" value="Submit" />
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </Layout>
);
