import React from 'react';

import Link from './Link';

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
