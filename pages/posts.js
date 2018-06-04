import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Layout from '../components/Layout';
import { Link } from '../routes';

const Title = 'Posts';

const PostsQuery = gql`
  query Query {
    allPosts {
      id
      title
      createdAt
    }
  }
`;

const Posts = () => (
  <Layout title={Title}>
    <div className="ui container">
      <h3 className="ui top attached header">{Title}</h3>
      <div className="ui attached segment">
        <Query query={PostsQuery}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            const { allPosts } = data;

            return (
              <section className="posts">
                {allPosts.map(post => (
                  <div key={post.id}>
                    <h3>
                      <Link route="post" params={{ id: post.id }}>
                        <a>{post.title}</a>
                      </Link>
                    </h3>
                    <div className="ui divider" />
                  </div>
                ))}
              </section>
            );
          }}
        </Query>
      </div>
    </div>
  </Layout>
);

export default Posts;
