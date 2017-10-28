import React from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';

import { Link } from '../routes';

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = ({ pathname }) => (
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
        <a className={`item ${pathname === '/' && 'active'}`}>Home</a>
      </Link>
      <Link href="/about">
        <a className={`item ${pathname === '/about' && 'active'}`}>About</a>
      </Link>
      <Link href="/posts">
        <a className={`item ${pathname === '/posts' && 'active'}`}>Posts</a>
      </Link>
      <Link href="/contact">
        <a className={`item ${pathname === '/contact' && 'active'}`}>Contact</a>
      </Link>
    </div>
  </div>
);

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
