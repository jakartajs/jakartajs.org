import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { formatEm } from '../../styles/utils';

const NextEventContent = ({ children }) => <Wrapper>{children}</Wrapper>;

NextEventContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NextEventContent;

const Wrapper = styled('section')`
  padding: 1rem ${props => formatEm(props.theme.emSizes.containerPadding)} 3rem;
`;
