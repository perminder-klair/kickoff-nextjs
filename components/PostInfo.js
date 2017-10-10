import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

const PostInfo = ({ data }) => {
  const { Post } = data;

  if (!Post || data.loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (data.error) {
    console.log(data.error); // eslint-disable-line no-console
    window.alert('Load error, check console'); // eslint-disable-line no-alert
    return;
  }

  return (
    <div>
      <h1>{Post.title}</h1>
      <div>
        <span>
          ID: <b>{Post.id}</b>
        </span>
        <span>&nbsp;|&nbsp;</span>
        <span>
          Created At: {' '}
          <b>{moment(Post.createdAt).format('DD.MM.YYYY kk:mm')}</b>
        </span>
        <hr />
        <p>{Post.description}</p>
      </div>
    </div>
  );
};

PostInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

const query = gql`
  query Query($postId: ID!) {
    Post(id: $postId) {
      title
      description
      id
      createdAt
    }
  }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(query, {
  // See the watchQuery API for the options you can provide here
  options: ownProps => ({
    fetchPolicy: 'cache-and-network',
    variables: {
      postId: ownProps.postId,
    },
  }),
})(PostInfo);
