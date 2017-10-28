import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import PostList from '../components/PostList';
import withData from '../utils/withData';

const TITLE = 'Posts';

const Posts = ({ url }) => (
  <Layout title={TITLE} pathname={url.pathname}>
    <div className="ui container">
      <h3 className="ui top attached header">{TITLE}</h3>
      <div className="ui attached segment">
        <PostList />
      </div>
    </div>
  </Layout>
);

Posts.propTypes = {
  url: PropTypes.object.isRequired,
};

export default withData(Posts);
