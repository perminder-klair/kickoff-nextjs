import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import moment from 'moment';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Layout from '../components/Layout';

const Title = 'Post';

const PostQuery = gql`
  query Query($id: ID!) {
    Post(id: $id) {
      title
      description
      id
      createdAt
    }
  }
`;

const Post = ({ router }) => (
  <Layout title={Title}>
    <div className="ui container">
      <div className="ui segment">
        {console.log('id', router.query.id)}
        {router.query.id && (
          <Query query={PostQuery} variables={{ id: router.query.id }}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) return `Error! ${error.message}`;
              const { Post } = data;

              return (
                <div>
                  <h1>{Post.title}</h1>
                  <span>
                    ID: <b>{Post.id}</b>
                  </span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>
                    Created At:{' '}
                    <b>{moment(Post.createdAt).format('DD.MM.YYYY kk:mm')}</b>
                  </span>
                  <hr />
                  <p>{Post.description}</p>
                </div>
              );
            }}
          </Query>
        )}
      </div>
    </div>
  </Layout>
);

Post.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(Post);
