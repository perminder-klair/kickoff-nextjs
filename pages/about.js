import React from 'react';

import Layout from '../components/Layout';

const Title = 'About me';

const About = () => (
  <Layout title={Title}>
    <div className="ui container">
      <h3 className="ui top attached header">{Title}</h3>
      <div className="ui attached segment">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel nisl
          rutrum, mollis purus ac, viverra nisl. Quisque eleifend tempor orci,
          et lobortis diam cursus a. Morbi quis tortor rhoncus, tempus sem in,
          sodales turpis. Suspendisse bibendum rhoncus erat. Fusce ut
          consectetur ligula. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Proin at fermentum ex. Nullam eget augue ultrices, cursus purus
          a, consectetur turpis. Sed nec ligula semper, ullamcorper mi sed,
          dictum turpis. Phasellus eget metus ac est porttitor euismod tristique
          sit amet dolor. Morbi quis iaculis mauris. Aenean consequat, sem vel
          sagittis ullamcorper, enim felis consectetur velit, sit amet convallis
          massa ipsum vitae tortor. Aliquam in vehicula magna. Ut sit amet magna
          nec sapien elementum maximus. Ut dapibus turpis ornare massa tristique
          iaculis. Quisque iaculis, lorem sed malesuada suscipit, augue turpis
          dignissim enim, id dapibus urna purus sit amet dolor.
        </p>
      </div>
    </div>
  </Layout>
);

export default About;
