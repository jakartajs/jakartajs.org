import React from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';
import * as PropTypes from 'prop-types';

import { ButtonRoot } from './Button';

const LinkButton = ({ id, className, to, kind, size, children }) => (
  <LinkButtonRoot id={id} className={classnames(kind, size, className)} to={to} href={to}>
    {children}
  </LinkButtonRoot>
);

LinkButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  kind: PropTypes.oneOf(['primary', 'secondary', 'inverted', 'invertedsecondary', 'invertedwhite']),
  children: PropTypes.node.isRequired,
};

LinkButton.defaultProps = {
  id: null,
  className: null,
  size: 'medium',
  kind: 'primary',
};

export default LinkButton;

const LinkButtonRoot = ButtonRoot.withComponent(Link);
