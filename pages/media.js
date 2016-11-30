import React from 'react';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';
import GalleryItem from '../components/GalleryItem';

const {
    API_URL
} = require('../utils/config').default;

const TITLE = 'Media Gallery';

class Media extends React.Component {
    static async getInitialProps() {
        const instagramRes = await fetch(`${API_URL}/instagram/feed`);
        const instagram = await instagramRes.json();
        // console.log('instagram', instagram);
        return { instagram };
    }

    render() {
        const { instagram } = this.props;
        // console.log('instagram', instagram);

        return (
            <Layout title={TITLE}>
                <section className="page-header" style={{ backgroundImage: 'url(static/img/page_header_placeholder.jpg)' }}>
                    <div className="page-head-inside">
                        <div className="container">
                            <h1 className="font-reg">{TITLE}</h1>
                            <p className="font-reg">
                                My insta pictures<br />
                                I capture moments / <strong>happiness</strong> / emotions / <strong>impression</strong>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="portfolio-section page-section" id="portfolio">
                    <ul id="portfolio-items" className="row clearfix full-width">
                        {instagram.map(item => <GalleryItem key={item.id} item={item} />)}
                    </ul>
                </section>
            </Layout>
        );
    }
}

Media.propTypes = {
    instagram: React.PropTypes.array
};

export default Media;
