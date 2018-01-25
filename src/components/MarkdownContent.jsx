import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './MarkdownContent.module.scss';

const MarkdownContent = ({ html }) => (
  <div
    className={classnames(styles.root)}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

MarkdownContent.propTypes = {
  html: PropTypes.string.isRequired,
};

export default MarkdownContent;
