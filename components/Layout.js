import React, { PropTypes } from 'react';
import Head from 'next/head';
import { slugify } from 'underscore.string';

import Header from '../components/Header';
import Footer from '../components/Footer';

const {
    APP_NAME,
    APP_AUTHOR
} = require('../utils/config').default;

const Layout = ({ children, title }) => (
    <div id="app">
        <Head>
            <title>{APP_NAME} - {title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="UTF-8" />
            <meta name="author" content={APP_AUTHOR} />
            <link href="static/css/structure.css" rel="stylesheet" type="text/css" />
            <link href="static/css/style.css" rel="stylesheet" type="text/css" />
            <link href="static/css/responsive.css" rel="stylesheet" type="text/css" />
            <link href="static/css/timeline.css" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.js" />
        </Head>
        <Header />
        <div id="main-content" className={slugify(title)}>
            {children}
        </div>
        <Footer />
    </div>
);

Layout.defaultProps = {
    title: APP_AUTHOR
};

Layout.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string
};

export default Layout;
