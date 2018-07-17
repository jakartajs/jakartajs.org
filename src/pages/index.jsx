import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import HomepageHeader from '../components/HomepageHeader';
import Container from '../components/layout/Container';
import PageMain from '../components/page/PageMain';
import { HeaderImage } from '../assets/images';
import HomepageHeaderImage from '../components/home/HomepageHeaderImage';
import HomepageHeaderInner from '../components/home/HomepageHeaderInner';
import HomepageHeaderCard from '../components/home/HomepageHeaderCard';
import NextEventSection from '../components/home/NextEventSection';
import NextEventContainer from '../components/home/NextEventContainer';
import NextEventHeader from '../components/home/NextEventHeader';
import NextEventContent from '../components/home/NextEventContent';

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
    <NextEventSection>
      <NextEventHeader>
        <NextEventContainer>
          <span>Next Event</span>
          <h1>#40 JakartaJS July Meetup with Tiket.com</h1>
          <p>
            <small>
              <strong>Tiket.com</strong>
              <br />
              Jalan K.H. Mas Mansyur, RT.2/RW.8, Kebon Melati, Central Jakarta City, Jakarta Graha Niaga Thamrin 5th
              Floor
            </small>
          </p>
        </NextEventContainer>
      </NextEventHeader>
      <NextEventContent>
        <NextEventContainer>
          {/* eslint-disable max-len */}
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>Hello, JavaScript &amp; Node.js Ninjas!<br><br>Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!<br><br>The meetup format will contain some short stories and technical talks.<br><br>*Highlights*<br><br>6.00 pm: Doors Open: Mingle over<br><br>7.00 pm: Opening Address by Tiket.com<br><br>7.15 pm: Start of Scheduled Talks<br><br>* Talk 1: Serverless Website<br>by Sofyan Hadiwijaya ( CTO Warung Pintar )<br>* Talk 2: Understanding Javascript Engine to Code Better<br>by Ihsan Fauzi Rahman ( Principal Engineer Tiket.com)<br>* Talk 3: Lightning talk by Audience<br><br>9.30pm: EOL<br><br>*Miscellaneous*<br><br>If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.<br><br>Remember to bring a photo ID to get through building security.<br><br>- - - - -<br><br>See you there!<br><br>Remember to Join our Slack Group Chat:<br><br><a class="link" href="https://jakartajs-join.herokuapp.com" title="https://jakartajs-join.herokuapp.com" target="__blank">https://jakartajs-join.herokuapp.com</a> (<a class="link" href="https://jakartajs-join.herokuapp.com/" title="https://jakartajs-join.herokuapp.com/" target="__blank">https://jakartajs-join.herokuapp.com/</a>)<br><br>Interest to share and contribute about the topic for next meetup<br><br>You can submit your slides/topics on <a class="link" href="https://github.com/jakartajs/talks" title="https://github.com/jakartajs/talks" target="__blank">https://github.com/jakartajs/talks</a><br><br>Best,Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers<br><br>- - - - -<br><br>*The FAQ*<br><br>Q: Is this event free?A: Yes, it is.<br><br>Q: Who are the target audience?A: The target audiences are students, developers, coders, programmers, engineers and related professions.<br><br>Q: Can I come even if I haven't RSVP yet?A: This meetup has a restricted space, thus it's mandatory to RSVP<br><br>Q: Is it okay to come late?A: Yes, just come and join.<br><br>- - - - -</p>`,
            }}
          />
          {/* eslint-enable */}
        </NextEventContainer>
      </NextEventContent>
    </NextEventSection>
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
