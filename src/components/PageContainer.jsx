import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './PageContainer.module.scss';

const PageContainer = ({ children }) => (
  <div className={classnames(styles.root)}>
    {children}
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
