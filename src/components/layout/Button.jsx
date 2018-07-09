import React from 'react';
import classnames from 'classnames';
import styled from 'react-emotion';
import * as PropTypes from 'prop-types';
import { darken, transparentize } from 'polished';

const Button = ({ id, className, onClick, kind, type, size, children }) => (
  <ButtonRoot id={id} className={classnames(kind, size, className)} onClick={onClick} type={type}>
    {children}
  </ButtonRoot>
);

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  kind: PropTypes.oneOf(['primary', 'secondary', 'inverted', 'invertedwhite']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  id: null,
  className: null,
  onClick: null,
  size: 'medium',
  kind: 'primary',
  type: 'button',
};

export default Button;

export const ButtonRoot = styled('button')`
  display: inline-block;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  background: transparent;
  color: ${props => props.theme.colors.body};
  font-family: ${props => props.theme.fonts.sansSerif};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &.primary {
    color: ${props => props.theme.pallette.white};
    background-color: ${props => props.theme.colors.brand};

    &:hover,
    &:focus {
      background-color: ${props => darken(0.1, props.theme.colors.brand)};
    }
  }

  &.secondary {
    color: ${props => props.theme.pallette.grey100};
    background-color: ${props => props.theme.pallette.grey900};

    &:hover,
    &:focus {
      background-color: ${props => darken(0.1, props.theme.pallette.grey900)};
    }
  }

  &.inverted {
    color: ${props => props.theme.colors.brand};
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.brand};

    &:hover,
    &:focus {
      background-color: ${props => transparentize(0.95, props.theme.pallette.black)};
    }
  }

  &.invertedwhite {
    color: ${props => props.theme.pallette.white};
    background-color: transparent;
    border: 2px solid ${props => props.theme.pallette.white};

    &:hover,
    &:focus {
      background-color: ${props => transparentize(0.95, props.theme.pallette.white)};
    }
  }

  &.large {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
  }
`;
