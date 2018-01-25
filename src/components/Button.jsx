import React from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  id,
  className,
  onClick,
  kind,
  type,
  children,
}) => (
  <button
    id={id}
    className={classnames(styles.root, styles[kind], className)}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'inverted',
  ]),
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  id: null,
  className: null,
  onClick: null,
  kind: 'primary',
  type: 'button',
};

export default Button;
