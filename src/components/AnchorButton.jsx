import React from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';

import styles from './Button.module.scss';

const AnchorButton = ({
  id,
  className,
  href,
  kind,
  newTab,
  children,
}) => (
  <a
    id={id}
    className={classnames(styles.root, styles[kind], className)}
    href={href}
    target={newTab ? '_blank' : null}
    rel={newTab ? 'noopener noreferrer' : null}
  >
    {children}
  </a>
);

AnchorButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'inverted',
  ]),
  children: PropTypes.node.isRequired,
};

AnchorButton.defaultProps = {
  id: null,
  className: null,
  newTab: false,
  kind: 'primary',
};

export default AnchorButton;
