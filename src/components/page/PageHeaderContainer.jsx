import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { formatPx } from '../../styles/utils';

const PageHeaderContainer = ({ children }) => <Wrapper>{children}</Wrapper>;

PageHeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeaderContainer;

const Wrapper = styled('div')`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => formatPx(props.theme.pxSizes.widths.md)};
`;
