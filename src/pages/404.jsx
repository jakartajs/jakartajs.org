import React from 'react';
import styled from 'react-emotion';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

import PageMain from '../components/page/PageMain';
import PageHeader from '../components/page/PageHeader';
import PageContent from '../components/page/PageContent';
import PageContainer from '../components/page/PageContainer';
import PageHeaderContainer from '../components/page/PageHeaderContainer';

const NotFoundPage = ({ data }) => (
  <PageMain>
    <Helmet
      title={`404: Page not found. · ${data.site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { property: 'og:title', content: '404: Page not found.' },
        { property: 'og:description', content: data.site.siteMetadata.description },
      ]}
    />
    <PageHeader>
      <PageHeaderContainer>
        <h1>Not Found</h1>
      </PageHeaderContainer>
    </PageHeader>
    <PageContent>
      <ContentInner>
        <PageContainer>
          <CodeWrapper>res.status(404).send(&apos;Cannot find this page.&apos;)</CodeWrapper>
          <Link href="/" to="/">
            Go back home
          </Link>
        </PageContainer>
      </ContentInner>
    </PageContent>
  </PageMain>
);

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
      }
    }
  }
`;

const CodeWrapper = styled('div')`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.body};
  color: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.fonts.monospace};
`;

const ContentInner = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
