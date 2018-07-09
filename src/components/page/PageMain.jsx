import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';

const PageMain = ({ children }) => <PageMainRoot>{children}</PageMainRoot>;

PageMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageMain;

const PageMainRoot = styled('main')`
  flex: 1;
`;
