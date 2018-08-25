import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { formatPx } from '../../../styles/utils';

const JoinUsContainer = ({ children }) => <Wrapper>{children}</Wrapper>;

JoinUsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JoinUsContainer;

const Wrapper = styled('div')`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => formatPx(props.theme.pxSizes.widths.md)};
`;
