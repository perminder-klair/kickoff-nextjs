import React from 'react';
import Link from 'next/link';

export default () => (
    <div className="ui container">
        <div className="ui borderless stackable menu">
            <div className="item">
                <Link to="/">
                    <a><img className="ui fluid image logo" src="static/images/logo.png" alt="logo" style={{ width: '66px' }} /></a>
                </Link>
            </div>
            <Link href="/"><a className="item">Home</a></Link>
            <Link href="/about"><a className="item">About</a></Link>
        </div>
    </div>
);
