import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';

const MarkdownContent = ({ html }) => <MarkdownContentRoot dangerouslySetInnerHTML={{ __html: html }} />;

MarkdownContent.propTypes = {
  html: PropTypes.string.isRequired,
};

export default MarkdownContent;

const MarkdownContentRoot = styled('div')`
  & p {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
