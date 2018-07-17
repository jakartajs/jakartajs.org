import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { formatPx } from '../../styles/utils';

const NextEventContainer = ({ children }) => <Wrapper>{children}</Wrapper>;

NextEventContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NextEventContainer;

const Wrapper = styled('div')`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => formatPx(props.theme.pxSizes.widths.md)};
`;
