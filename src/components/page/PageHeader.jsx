import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';

const PageHeader = ({ children }) => <PageMainRoot>{children}</PageMainRoot>;

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeader;

const PageMainRoot = styled('header')`
  padding: 2rem 1rem;
  text-align: center;
`;
