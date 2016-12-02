import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout';

// const markdown = require('raw-loader!./../../md/test.md');
// console.log('markdown', markdown);
// import markdown from '../../md/test.md';

const title = 'Test';
const markdown = '# This is a header\n\nAnd this is a paragraph';

export default () => (
    <Layout title={title}>
        <section className="page-section">
            <div className="container">
                <ReactMarkdown source={markdown} />
            </div>
        </section>
    </Layout>
);
