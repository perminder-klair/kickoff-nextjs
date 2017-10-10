import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import PostInfo from '../components/PostInfo';
import withData from '../utils/withData';

const TITLE = 'Post';

const Post = ({ url }) => (
  <Layout title={TITLE}>
    <div className="ui container">
      <PostInfo postId={url.query.postId} />
    </div>
  </Layout>
);

Post.propTypes = {
  url: PropTypes.object.isRequired,
};

export default withData(Post);
