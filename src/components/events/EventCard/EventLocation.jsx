import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'react-emotion';

const EventLocation = ({ children, className }) => <Address className={classnames(className)}>{children}</Address>;

EventLocation.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

EventLocation.defaultProps = {
  className: null,
};

export default EventLocation;

const Address = styled('address')`
  font-style: normal;
  font-size: 0.9rem;
`;
