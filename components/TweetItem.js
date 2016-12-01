import React from 'react';

const TweetItem = ({ item }) => {
    if (item === undefined) {
        return null;
    }

    return (
        <li className="col-xlarge-3 col-medium-3">
            <a href="#" className="blog-item font-reg">
                <p>favorites: {item.favorite_count} / retweet: {item.retweet_count}</p>
                <div className="page-content">
                    <p>{item.text}</p>
                </div>
            </a>
        </li>
    );
};

TweetItem.propTypes = {
    item: React.PropTypes.object
};

export default TweetItem;
