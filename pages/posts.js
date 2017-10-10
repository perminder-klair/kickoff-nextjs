import React from 'react';

import Layout from '../components/Layout';
import PostList from '../components/PostList';
import withData from '../utils/withData';

const TITLE = 'Posts';

const Posts = () => (
  <Layout title={TITLE}>
    <div className="ui container">
      <h3 className="ui top attached header">Posts</h3>
      <div className="ui attached segment">
        <PostList />
      </div>
    </div>
  </Layout>
);

export default withData(Posts);