import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import HomepageHeader from '../components/HomepageHeader';
import Container from '../components/layout/Container';
import PageMain from '../components/page/PageMain';
import { HeaderImage } from '../assets/images';
import HomepageHeaderImage from '../components/home/HomepageHeaderImage';
import HomepageHeaderInner from '../components/home/HomepageHeaderInner';
import HomepageHeaderCard from '../components/home/HomepageHeaderCard';
import styled from '../../node_modules/react-emotion';

const IndexPage = ({ data }) => (
  <PageMain>
    <Helmet
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { property: 'og:title', content: data.site.siteMetadata.subtitle },
        { property: 'og:description', content: data.site.siteMetadata.description },
      ]}
    />
    <HomepageHeader>
      <HomepageHeaderImage src={HeaderImage} alt={data.site.siteMetadata.subtitle} />
      <HomepageHeaderInner>
        <Container>
          <HomepageHeaderCard title="Jakarta JavaScript User Group">
            <LeadText>
              Come and meet other developers &amp; industry leaders interested in JavaScript and its ecosystem in the
              Greater Jakarta area.
            </LeadText>
          </HomepageHeaderCard>
        </Container>
      </HomepageHeaderInner>
    </HomepageHeader>
    <div>
      <h2>Next Event</h2>
      <p>something</p>
    </div>
  </PageMain>
);

IndexPage.propTypes = {
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

const LeadText = styled('p')`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 300;
`;

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
      }
    }
  }
`;
