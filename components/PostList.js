import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Link } from '../routes';

const PostList = ({ data }) => {
  // console.log('data', data);
  if (data.loading && !data.allPosts) {
    return <div>loading...</div>;
  }

  if (data.error) {
    console.log(data.error); // eslint-disable-line no-console
    return <div>Load error, check console</div>;
  }

  return (
    <div>
      <section className="posts">
        {data.allPosts.map(post => (
          <div key={post.id}>
            <h3>
              <Link route="post" params={{ postId: post.id }}>
                <a>{post.title}</a>
              </Link>
            </h3>
            <div className="ui divider" />
          </div>
        ))}
      </section>
    </div>
  );
};

PostList.propTypes = {
  data: PropTypes.object.isRequired,
};

const query = gql`
  query Query {
    allPosts {
      id
      title
      createdAt
    }
  }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(query, {
  // See the watchQuery API for the options you can provide here
  options: {
    fetchPolicy: 'cache-and-network',
  },
})(PostList);
