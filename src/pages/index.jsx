/* eslint-disable no-nested-ternary */

import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import format from 'date-fns/format';
import styled from 'react-emotion';

import { HeaderImage } from '../assets/images';
import HomepageHeaderImage from '../components/home/HomepageHeaderImage';
import HomepageHeaderInner from '../components/home/HomepageHeaderInner';
import HomepageHeaderCard from '../components/home/HomepageHeaderCard';
import {
  NextEventHeader,
  NextEventContainer,
  NextEventLoading,
  NextEventEmpty,
  NextEventError,
} from '../components/home/NextEvent';
import HomepageHeader from '../components/home/HomepageHeader';
import { JoinUsSection, JoinUsContainer } from '../components/home/JoinUs';
import Container from '../components/layout/Container';
import AnchorButton from '../components/layout/AnchorButton';
import PageMain from '../components/page/PageMain';
import TemplateWrapper from '../layouts';

class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string,
          subtitle: PropTypes.string,
          description: PropTypes.string,
        }),
      }),
    }).isRequired,
    location: PropTypes.shape({}).isRequired,
  };

  static renderLoading() {
    return <NextEventLoading />;
  }

  static renderEvent(events) {
    return events.length !== 0 ? (
      <NextEventHeader>
        <NextEventContainer>
          <h1>{events[0].name}</h1>
          <p className="lead">
            <time dateTime={new Date(events[0].time).toISOString()}>
              {format(new Date(events[0].time), 'dddd, D MMMM YYYY - HH:mm')}
            </time>
          </p>
          <p>
            <strong>{events[0].venue.name}</strong>
            <br />
            {events[0].venue.address_1}
          </p>
          <ButtonWrapper>
            <AnchorButton href={events[0].link} size="large" newTab>
              Join Event
            </AnchorButton>
          </ButtonWrapper>
        </NextEventContainer>
      </NextEventHeader>
    ) : (
      <NextEventEmpty />
    );
  }

  static renderErrors(errors) {
    return <NextEventError errors={errors} />;
  }

  render() {
    const { data, location } = this.props;

    return (
      <TemplateWrapper isHomepage location={location}>
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
                    Come and meet other developers &amp; industry leaders interested in JavaScript and its ecosystem in
                    the Greater Jakarta area.
                  </LeadText>
                </HomepageHeaderCard>
              </Container>
            </HomepageHeaderInner>
          </HomepageHeader>
          <JoinUsSection>
            <JoinUsContainer>
              <h2>Join Us</h2>
              <p>
                Our meetups are free to attend and open to anyone. You can also join our Slack and talk with members of
                community, as well as experts in their field.
              </p>
              <div>
                <AnchorButton href="https://www.meetup.com/JakartaJS/events/past/" kind="primary" size="medium" newTab>
                  View Meetup Page
                </AnchorButton>{' '}
                <AnchorButton href="https://jakartajs-join.herokuapp.com/" kind="inverted" size="medium" newTab>
                  Join Our Slack
                </AnchorButton>
              </div>
            </JoinUsContainer>
          </JoinUsSection>
        </PageMain>
      </TemplateWrapper>
    );
  }
}

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

const ButtonWrapper = styled('div')`
  margin-top: 2rem;
  text-align: center;
`;
