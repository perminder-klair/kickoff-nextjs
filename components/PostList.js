import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

const PostList = ({ data }) => {
  // console.log('data', data);
  if (data.loading && !data.allPosts) {
    return <div>loading...</div>;
  }

  if (data.error) {
    return <div>Error! Failed to fetch.</div>;
  }

  return (
    <div>
      <section className="posts">
        {data.allPosts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
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
      votes
      createdAt
    }
  }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(query, {
  // See the watchQuery API for the options you can provide here
  options: {
    fetchPolicy: 'network-only',
  },
})(PostList);
