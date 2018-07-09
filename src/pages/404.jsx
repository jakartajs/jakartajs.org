import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import HomepageHeader from '../components/HomepageHeader';
import PageContainer from '../components/PageContainer';
import Card from '../components/layout/Card';

const NotFoundPage = ({ data }) => (
  <main>
    <Helmet
      title={`404: Page not found. · ${data.site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { property: 'og:title', content: '404: Page not found.' },
        { property: 'og:description', content: data.site.siteMetadata.description },
      ]}
    />
    <HomepageHeader>
      <h1>JakartaJS</h1>
    </HomepageHeader>
    <PageContainer>
      <Card>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link href="/" to="/">
          Go back home
        </Link>
      </Card>
    </PageContainer>
  </main>
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
