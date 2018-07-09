import React from 'react';
import * as PropTypes from 'prop-types';

import PageContainer from '../components/PageContainer';
import MarkdownContent from '../components/page/MarkdownContent';
import Card from '../components/layout/Card';

const PageTemplate = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <main>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <PageContainer>
        <Card>
          <MarkdownContent html={markdownRemark.html} />
        </Card>
      </PageContainer>
    </main>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      excerpt: PropTypes.string,
      fields: PropTypes.shape({
        slug: PropTypes.string,
        layout: PropTypes.string,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default PageTemplate;

export const query = graphql`
  query PageQuery($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
        layout
      }
      frontmatter {
        title
      }
    }
  }
`;
