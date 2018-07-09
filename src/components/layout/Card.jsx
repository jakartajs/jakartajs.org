import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'react-emotion';

const Card = ({ children, className }) => <CardRoot className={classnames(className)}>{children}</CardRoot>;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  className: null,
};

export default Card;

const CardRoot = styled('div')`
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.theme.pallette.white};
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
