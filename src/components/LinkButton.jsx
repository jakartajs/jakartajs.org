import React from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';
import * as PropTypes from 'prop-types';

import styles from './Button.module.scss';

const LinkButton = ({
  id,
  className,
  to,
  kind,
  children,
}) => (
  <Link
    id={id}
    className={classnames(styles.root, styles[kind], className)}
    to={to}
    href={to}
  >
    {children}
  </Link>
);

LinkButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'inverted',
  ]),
  children: PropTypes.node.isRequired,
};

LinkButton.defaultProps = {
  id: null,
  className: null,
  kind: 'primary',
};

export default LinkButton;
