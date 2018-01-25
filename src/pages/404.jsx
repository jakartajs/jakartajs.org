import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import styles from './home.module.scss';
import HomepageHeader from '../components/HomepageHeader';
import PageContainer from '../components/PageContainer';
import Card from '../components/Card';

const NotFoundPage = ({ data }) => (
  <main className={classnames(styles.main, styles.homepageMain)}>
    <Helmet
      title={`404: Page not found. · ${data.site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { property: 'og:title', content: '404: Page not found.' },
        { property: 'og:description', content: data.site.siteMetadata.description },
      ]}
    />
    <div className={classnames(styles.mainHeader, styles.homepageMainHeader)} />
    <HomepageHeader>
      <h1 className={styles.heading}>JakartaJS</h1>
    </HomepageHeader>
    <PageContainer>
      <Card>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link href="/" to="/">Go back home</Link>
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
