import React from 'react';

import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Title = 'Contact us';

const Contact = () => (
  <Layout title={Title}>
    <div className="ui container">
      <h3 className="ui top attached header">{Title}</h3>
      <div className="ui attached segment">
        <ContactForm />
      </div>
    </div>
  </Layout>
);

export default Contact;
