import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { formatEm } from '../../styles/utils';

const NextEventHeader = ({ children }) => <Wrapper>{children}</Wrapper>;

NextEventHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NextEventHeader;

const Wrapper = styled('header')`
  padding: 2rem ${props => formatEm(props.theme.emSizes.containerPadding)};
  text-align: center;
`;
