import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import Layout from '../components/Layout';
import PostInfo from '../components/PostInfo';

const TITLE = 'Post';

const Post = ({ router }) => (
  <Layout title={TITLE}>
    <div className="ui container">
      <div className="ui segment">
        <PostInfo postId={router.query.postId} />
      </div>
    </div>
  </Layout>
);

Post.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(Post);
