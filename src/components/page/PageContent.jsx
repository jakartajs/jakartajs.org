import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';

const PageContent = ({ children }) => <Section>{children}</Section>;

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;

const Section = styled('section')`
  display: flex;
  flex-direction: column;
  flex 1 1 auto;
  padding: 0 1rem 3rem;
`;
