import React from 'react';
import { truncate } from 'underscore.string';

const GalleryItem = ({ item }) => {
    if (item === undefined) {
        return null;
    }

    return (
        <li className="col-xlarge-3 col-medium-4 design">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-item">
                <img src={item.images.standard_resolution.url} className="image" alt="" />
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content font-reg">
                        <h3>{item.location !== null ? item.location.name : truncate(item.caption.text, 15, '')}</h3>
                        <p>{item.likes.count} likes</p>
                    </div>
                </div>
            </a>
        </li>
    );
};

GalleryItem.propTypes = {
    item: React.PropTypes.object
};

export default GalleryItem;
