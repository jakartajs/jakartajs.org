import React from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';

import { ButtonRoot } from './Button';

const AnchorButton = ({ id, className, href, kind, newTab, size, children }) => (
  <AnchorButtonRoot
    id={id}
    className={classnames(kind, size, className)}
    href={href}
    target={newTab ? '_blank' : null}
    rel={newTab ? 'noopener noreferrer' : null}
  >
    {children}
  </AnchorButtonRoot>
);

AnchorButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  kind: PropTypes.oneOf(['primary', 'secondary', 'inverted', 'invertedwhite']),
  children: PropTypes.node.isRequired,
};

AnchorButton.defaultProps = {
  id: null,
  className: null,
  newTab: false,
  size: 'medium',
  kind: 'primary',
};

export default AnchorButton;

const AnchorButtonRoot = ButtonRoot.withComponent('a');
