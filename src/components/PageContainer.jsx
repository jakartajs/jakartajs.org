import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';

import { formatPx } from '../styles/utils';

const PageContainer = ({ children }) => <PageContainerRoot>{children}</PageContainerRoot>;

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;

const PageContainerRoot = styled('div')`
  display: flex;
  max-width: ${props => formatPx(props.theme.pxSizes.widths.lg)};
  margin: 0 auto;
`;
