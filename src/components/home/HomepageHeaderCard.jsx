import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { transparentize } from 'polished';
import { formatEm, formatPx } from '../../styles/utils';

const wrapperPadding = 1.5;

const HomepageHeaderCard = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

HomepageHeaderCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Wrapper = styled('div')`
  padding: ${wrapperPadding}rem;
  padding-left: ${props => formatEm(props.theme.emSizes.containerPadding + wrapperPadding)};
  margin-right: auto;
  margin-left: -${props => formatEm(props.theme.emSizes.containerPadding + wrapperPadding)};
  max-width: 600px;
  background-color: ${props => transparentize(0.25, props.theme.pallette.grey100)};
  color: ${props => props.theme.pallette.grey800};

  @media only screen and (min-width: ${props => formatPx(props.theme.pxSizes.breakpoints.md)}) {
    padding-left: ${props => formatEm(props.theme.emSizes.containerPadding * 2 + wrapperPadding)};
    margin-left: -${props => formatEm(props.theme.emSizes.containerPadding * 2 + wrapperPadding)};
  }

  @media only screen and (min-width: ${props => formatPx(props.theme.pxSizes.breakpoints.lg)}) {
    padding-left: ${props => formatEm(props.theme.emSizes.containerPadding * 3 + wrapperPadding)};
    margin-left: -${props => formatEm(props.theme.emSizes.containerPadding * 3 + wrapperPadding)};
  }
`;

const Title = styled('h1')`
  margin-top: 0;
  color: ${props => props.theme.pallette.grey800};
`;

export default HomepageHeaderCard;
