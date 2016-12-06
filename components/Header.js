import React from 'react';
import Link from 'next/link';

export default () => (
    <div className="ui container">
        <div className="ui borderless stackable menu">
            <div className="item">
                <Link to="/">
                    <img className="ui fluid image logo" src="static/images/logo.png" alt="logo" style={{ width: '66px' }} />
                </Link>
            </div>
            <a className="item"><Link href="/">Home</Link></a>
            <a className="item"><Link href="/about">About</Link></a>
        </div>
    </div>
);
