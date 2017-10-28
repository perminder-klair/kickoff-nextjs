import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

const TITLE = 'About me';

const About = ({ url }) => (
  <Layout title={TITLE} pathname={url.pathname}>
    <div className="ui container">
      <h3 className="ui top attached header">{TITLE}</h3>
      <div className="ui attached segment">
        <p>This is about page, coming soon!</p>
      </div>
    </div>
  </Layout>
);

About.propTypes = {
  url: PropTypes.object.isRequired,
};

export default About;
