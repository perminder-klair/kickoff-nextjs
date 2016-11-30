import React from 'react';

const {
    APP_NAME,
    SOCIAL_FACEBOOK,
    SOCIAL_INSTAGRAM,
    SOCIAL_TWITTER,
    SITE_URL
} = require('../utils/config').default;

export default () => (
    <footer>
        <div className="footer-main">
            <div className="container clearfix">

                <p className="font-reg">
                    Webonise.co.uk &copy; 2016 {APP_NAME} - All Rights Reserved : This site has been <a href={SITE_URL}>Webonised</a>
                </p>

                <ul className="footer-social">
                    <li><a href={SOCIAL_FACEBOOK} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
                    <li><a href={SOCIAL_TWITTER} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
                    <li><a href={SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
                </ul>

                <div id="scroll-top">
                    <span className="fa fa-angle-up" />
                </div>

            </div>
        </div>
    </footer>
);
