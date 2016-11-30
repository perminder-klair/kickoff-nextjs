import React from 'react';
// import { css } from 'glamor';

// const container = css({
//     textAlign: 'center'
// });
//  {...container}

const GithubItem = ({ item }) => {
    if (item === undefined) {
        return null;
    }

    return (
        <li className="col-xlarge-4 col-medium-4">
            <a href={item.html_url} className="blog-item font-reg">
                <h3>{item.name}</h3>
                <p>stas: {item.stargazers_count} / forks: {item.forks_count} / watchers: {item.watchers_count}</p>
                <div className="page-content">
                    <p>{item.description}</p>
                </div>
            </a>
        </li>
    );
};

GithubItem.propTypes = {
    item: React.PropTypes.object
};

export default GithubItem;
