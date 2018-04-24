import React from 'react';
import marked from 'marked';

export default ({ content, className }) => (
  <div className={className}>{marked(content)}</div>
);

export const HTMLContent = ({ content, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: marked(content) }}
  />
);
