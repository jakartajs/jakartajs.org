import React from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';

import styles from './home.module.scss';
import HomepageHeader from '../components/HomepageHeader';
import PageContainer from '../components/PageContainer';
import Card from '../components/Card';

const NotFoundPage = () => (
  <main className={classnames(styles.main, styles.homepageMain)}>
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

export default NotFoundPage;
