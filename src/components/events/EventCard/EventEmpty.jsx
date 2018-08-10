import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'react-emotion';

const EventEmpty = ({ className }) => <Div className={classnames(className)}>There are no events.</Div>;

EventEmpty.propTypes = {
  className: PropTypes.string,
};

EventEmpty.defaultProps = {
  className: null,
};

export default EventEmpty;

const Div = styled('div')`
  width: 100%;
  margin: 2rem 0;
`;
