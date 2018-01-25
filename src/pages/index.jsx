import React from 'react';
import classnames from 'classnames';

import styles from './home.module.scss';
import HomepageHeader from '../components/HomepageHeader';
import PageContainer from '../components/PageContainer';
import Card from '../components/Card';
import LinkButton from '../components/LinkButton';
import AnchorButton from '../components/AnchorButton';

const IndexPage = () => (
  <main className={classnames(styles.main, styles.homepageMain)}>
    <div className={classnames(styles.mainHeader, styles.homepageMainHeader)} />
    <HomepageHeader>
      <h1 className={styles.heading}>JakartaJS</h1>
    </HomepageHeader>
    <PageContainer>
      <Card className={styles.titleCard}>
        <h2 className={styles.subtitle}>Jakarta JavaScript User Group</h2>
        <p className="lead">
          Come and meet other developers &amp; industry leaders interested in JavaScript and its ecosystem
          in the Greater Jakarta area.
        </p>
        <LinkButton kind="inverted" href="/about/" to="/about/">About Us</LinkButton>{' '}
        <AnchorButton href="https://jakartajs-join.herokuapp.com/" newTab>Join Slack</AnchorButton>
      </Card>
    </PageContainer>
  </main>
);

export default IndexPage;
