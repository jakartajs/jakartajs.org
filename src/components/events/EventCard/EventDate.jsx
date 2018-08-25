import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'react-emotion';

const EventDate = ({ children, dateTime, className }) => (
  <Time dateTime={dateTime} className={classnames(className)}>
    {children}
  </Time>
);

EventDate.propTypes = {
  className: PropTypes.string,
  dateTime: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

EventDate.defaultProps = {
  className: null,
};

export default EventDate;

const Time = styled('time')`
  display: block;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.brand};
  font-size: 0.9rem;
  font-weight: 700;
`;
