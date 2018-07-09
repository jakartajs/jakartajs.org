import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { formatEm } from '../../styles/utils';

const NextEventSection = ({ children }) => <NextEventRoot>{children}</NextEventRoot>;

NextEventSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NextEventSection;

const NextEventRoot = styled('section')`
  padding: ${props => formatEm(props.theme.emSizes.containerPadding)};
  background-color: ${props => props.theme.pallette.white};
`;
