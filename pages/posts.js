import React from 'react';

import Layout from '../components/Layout';
import PostList from '../components/PostList';

const TITLE = 'Posts';

const Posts = () => (
  <Layout title={TITLE}>
    <div className="ui container">
      <h3 className="ui top attached header">{TITLE}</h3>
      <div className="ui attached segment">
        <PostList />
      </div>
    </div>
  </Layout>
);

export default Posts;
