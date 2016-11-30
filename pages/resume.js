import React from 'react';

import Layout from '../components/Layout';

const TITLE = 'My Resume';

export default () => (
    <Layout title={TITLE}>
        <section className="page-header" style={{ backgroundImage: 'url(static/img/page_header_placeholder.jpg)' }}>
            <div className="page-head-inside">
                <div className="container">
                    <h1 className="font-reg">All About Me</h1>
                    <p className="font-reg">
                        Welcome to my timeline. My <strong>work experience</strong> and <strong>education</strong> details are almost explained here. Take a moment to <strong>check out</strong>!
                    </p>
                </div>
            </div>
        </section>
    </Layout>
);
