import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

import Layout from '../components/Layout';

const {
  STACKABLE_URL,
  STACKABLE_KEY,
  STACKABLE_GALLERY,
} = require('../lib/config').default;

const TITLE = 'Home';

const Header = styled.h3`
  &&& {
    color: grey;
  }
`;

class Home extends React.Component {
  static async getInitialProps() {
    const url = `${STACKABLE_URL}/containers/${STACKABLE_GALLERY}/items?token=${STACKABLE_KEY}`;
    const galleryRes = await fetch(url); // eslint-disable-line
    const gallery = await galleryRes.json();
    return { gallery };
  }

  render() {
    const { gallery } = this.props;

    return (
      <Layout title={TITLE}>
        <div className="ui container">
          <Header className="ui top attached header">Dashboard</Header>
          <div className="ui attached segment">
            <p>Welcome to NextJs starting point.</p>
            <div className="ui divider" />

            <div className="ui medium header">Gallery</div>
            <div className="ui small images">
              {gallery.data.length === 0 ? (
                <p>No gallery images found</p>
              ) : (
                gallery.data.map(item => (
                  <LazyLoad height="112" width="150" key={item._id}>
                    <img
                      src={item.data.image.url}
                      alt={item.data.title}
                      height="112"
                      width="150"
                    />
                  </LazyLoad>
                ))
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
