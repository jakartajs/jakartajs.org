import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { formatEm } from '../../../styles/utils';

const NextEventHeader = ({ children }) => (
  <Wrapper>
    <Banner>Next Event</Banner>
    {children}
  </Wrapper>
);

NextEventHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NextEventHeader;

const Banner = styled('span')`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.brand};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Wrapper = styled('header')`
  padding: 2rem ${props => formatEm(props.theme.emSizes.containerPadding)};
  text-align: center;
`;
