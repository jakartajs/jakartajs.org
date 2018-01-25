import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Card.module.scss';

const Card = ({ children, className }) => (
  <div className={classnames(styles.root, className)}>
    {children}
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  className: null,
};

export default Card;
