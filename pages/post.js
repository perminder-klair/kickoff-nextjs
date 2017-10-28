import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import PostInfo from '../components/PostInfo';
import withData from '../utils/withData';

const TITLE = 'Post';

const Post = ({ url }) => (
  <Layout title={TITLE} pathname={url.pathname}>
    <div className="ui container">
      <div className="ui segment">
        <PostInfo postId={url.query.postId} />
      </div>
    </div>
  </Layout>
);

Post.propTypes = {
  url: PropTypes.object.isRequired,
};

export default withData(Post);
