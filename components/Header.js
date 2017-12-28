import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

import Link from './Link';

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = () => (
  <div className="ui container">
    <div className="ui borderless stackable menu">
      <div className="item">
        <Link href="/">
          <a>
            <img
              className="ui fluid image logo"
              src="static/images/logo.png"
              alt="logo"
              style={{ width: '66px' }}
            />
          </a>
        </Link>
      </div>
      <Link href="/">
        <a className="item">Home</a>
      </Link>
      <Link prefetch href="/about">
        <a className="item">About</a>
      </Link>
      <Link prefetch href="/posts">
        <a className="item">Posts</a>
      </Link>
      <Link prefetch href="/contact">
        <a className="item">Contact</a>
      </Link>
    </div>
  </div>
);

export default Header;
