import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import PageContainer from '../components/page/PageContainer';
import MarkdownContent from '../components/page/MarkdownContent';
import PageMain from '../components/page/PageMain';
import PageHeader from '../components/page/PageHeader';
import PageContent from '../components/page/PageContent';
import PageHeaderContainer from '../components/page/PageHeaderContainer';

const PageTemplate = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <PageMain isMarkdownPage>
      <Helmet
        title={`${markdownRemark.frontmatter.title} · ${data.site.siteMetadata.title}`}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { property: 'og:title', content: '404: Page not found.' },
          { property: 'og:description', content: data.site.siteMetadata.description },
        ]}
      />
      <PageHeader>
        <PageHeaderContainer>
          <h1>{markdownRemark.frontmatter.title}</h1>
        </PageHeaderContainer>
      </PageHeader>
      <PageContent>
        <PageContainer>
          <MarkdownContent html={markdownRemark.html} />
        </PageContainer>
      </PageContent>
    </PageMain>
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
