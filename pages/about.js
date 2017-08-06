import React from 'react';

import Layout from '../components/Layout';

const TITLE = 'About me';

export default () =>
	<Layout title={TITLE}>
		<div className="ui container">
			<h3 className="ui top attached header">About us</h3>
			<div className="ui attached segment">
				<p>This is about page, coming soon!</p>
			</div>
		</div>
	</Layout>;
