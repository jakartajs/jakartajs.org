import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { formatPx } from '../styles/utils';

const HomepageHeader = ({ children }) => <HomepageHeaderRoot>{children}</HomepageHeaderRoot>;

HomepageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomepageHeader;

const HomepageHeaderRoot = styled('div')`
  display: block;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.brand};
  color: ${props => props.theme.pallette.grey100};
  height: 100vh;

  @media screen and (min-width: ${props => formatPx(props.theme.pxSizes.breakpoints.lg)}) {
    height: 600px;
  }
`;

/*
const HomepageHeaderInner = styled('div')`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
*/
