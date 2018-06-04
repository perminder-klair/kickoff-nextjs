import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { slugify } from 'underscore.string';
import NProgress from 'nprogress';
import Router from 'next/router';

import Header from '../components/Header';
import { initGA, logPageView } from '../lib/analytics';

const { APP_NAME, APP_AUTHOR } = require('../lib/config').default;

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }

    logPageView();
  }

  render() {
    const { children, title } = this.props;

    return (
      <div id="app">
        <Head>
          <title>
            {title} | {APP_NAME}
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="UTF-8" />
          <meta name="author" content={APP_AUTHOR} />
          <base href="/" target="_blank" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.js" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/styles/nprogress.css"
          />
        </Head>
        <Header />
        <div className={slugify(title)}>{children}</div>
      </div>
    );
  }
}

Layout.defaultProps = {
  title: APP_AUTHOR,
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
};

export default Layout;
