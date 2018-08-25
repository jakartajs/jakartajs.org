import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';

const NextEventSection = ({ children }) => <NextEventRoot>{children}</NextEventRoot>;

NextEventSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NextEventSection;

const NextEventRoot = styled('article')`
  flex: 1 1 auto;
  background-color: ${props => props.theme.pallette.white};
  min-height: 280px;
`;
