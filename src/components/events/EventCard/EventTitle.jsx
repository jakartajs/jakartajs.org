import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'react-emotion';

const EventTitle = ({ children, className }) => <TitleRoot className={classnames(className)}>{children}</TitleRoot>;

EventTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

EventTitle.defaultProps = {
  className: null,
};

export default EventTitle;

const TitleRoot = styled('h3')`
  margin-top: 0;
`;
