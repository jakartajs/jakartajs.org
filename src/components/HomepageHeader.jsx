import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './HomepageHeader.module.scss';

const HomepageHeader = ({ children }) => (
  <div className={classnames(styles.root, styles.withBackground)}>
    {children}
  </div>
);

HomepageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomepageHeader;
