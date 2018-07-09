import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';

import { formatPx } from '../../styles/utils';

const Container = ({ children }) => <ContainerRoot>{children}</ContainerRoot>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

const ContainerRoot = styled('div')`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => formatPx(props.theme.pxSizes.widths.md)};

  @media only screen and (min-width: ${props => formatPx(props.theme.pxSizes.breakpoints.lg)}) {
    max-width: ${props => formatPx(props.theme.pxSizes.widths.lg)};
  }

  @media only screen and (min-width: ${props => formatPx(props.theme.pxSizes.breakpoints.xl)}) {
    max-width: ${props => formatPx(props.theme.pxSizes.widths.xl)};
  }
`;
