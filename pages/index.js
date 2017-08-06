import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';

const {
  STACKABLE_URL,
  STACKABLE_KEY,
  STACKABLE_GALLERY,
} = require('../utils/config').default;

const TITLE = 'Home';

class Home extends React.Component {
  static async getInitialProps() {
    const galleryRes = await fetch(
      `${STACKABLE_URL}/containers/${STACKABLE_GALLERY}/items?token=${STACKABLE_KEY}`,
    );
    const gallery = await galleryRes.json();
    return { gallery };
  }

  render() {
    const { gallery } = this.props;

    return (
      <Layout title={TITLE}>
        <div className="ui container">
          <h3 className="ui top attached header">Dashboard</h3>
          <div className="ui attached segment">
            <p>Welcome to NextJs starting point.</p>
            <div className="ui divider" />

            <div className="ui medium header">Gallery</div>
            <div className="ui small images">
              {gallery.data.length === 0
                ? <p>No gallery images found</p>
                : gallery.data.map(item =>
                    <img
                      key={item._id}
                      src={item.data.image.url}
                      alt={item.data.title}
                    />,
                  )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Home.propTypes = {
  gallery: PropTypes.object,
};

export default Home;
