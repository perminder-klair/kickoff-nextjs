import React from 'react';
import Link from 'next/link';

export default () => (
    <header>
        <div className="header-main header-wide">
            <div className="container clearfix">

                <div className="medium-header-container">
                    <Link href="/"><a id="site-logo" /></Link>
                    <div id="mobile-nav-button" className="hidden-desk hidden-tab">
                        <div id="mobile-nav-icon">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>

                <nav id="header-nav">
                    <ul id="nav-ul" className="menu font-reg clearfix">
                        <li className="menu-item">
                            <Link href="/"><a>about me</a></Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/resume"><a>resume</a></Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/media"><a>media</a></Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/contact"><a>contact</a></Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    </header>
);
