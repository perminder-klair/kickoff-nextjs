import React from 'react';

const TimelineItem = ({ item }) => {
    if (item === undefined) {
        return null;
    }

    return (
        <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie">
                <i className={item.icon} />
            </div>
            <div className="cd-timeline-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span className="cd-date">{item.eventTime}</span>
            </div>
        </div>
    );
};

TimelineItem.propTypes = {
    item: React.PropTypes.object
};

export default TimelineItem;
