import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';

const PageMain = ({ children, isMarkdownPage }) => (
  <PageMainRoot isMarkdownPage={isMarkdownPage}>{children}</PageMainRoot>
);

PageMain.propTypes = {
  children: PropTypes.node.isRequired,
  isMarkdownPage: PropTypes.bool,
};

PageMain.defaultProps = {
  isMarkdownPage: false,
};

export default PageMain;

const PageMainRoot = styled('main')`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  background-color: ${props => (props.isMarkdownPage ? props.theme.pallette.white : 'none')};
`;
