import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Title = 'Home';

const Header = styled.h3`
  &&& {
    color: grey;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <Layout title={Title}>
        <div className="ui container">
          <Header className="ui top attached header">Dashboard</Header>
          <div className="ui attached segment">
            <p>Welcome to NextJs starting point.</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
