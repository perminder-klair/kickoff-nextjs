import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import withData from '../utils/withData';

const TITLE = 'Contact us';

const Contact = ({ url }) => (
  <Layout title={TITLE} pathname={url.pathname}>
    <div className="ui container">
      <h3 className="ui top attached header">{TITLE}</h3>
      <div className="ui attached segment">
        <ContactForm />
      </div>
    </div>
  </Layout>
);

Contact.propTypes = {
  url: PropTypes.object.isRequired,
};

export default withData(Contact);
