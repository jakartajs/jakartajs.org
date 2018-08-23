/* eslint-disable no-nested-ternary */

import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import moment from 'moment';
import styled from 'react-emotion';

import { HeaderImage } from '../assets/images';
import HomepageHeaderImage from '../components/home/HomepageHeaderImage';
import HomepageHeaderInner from '../components/home/HomepageHeaderInner';
import HomepageHeaderCard from '../components/home/HomepageHeaderCard';
import {
  NextEventHeader,
  NextEventSection,
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
import LinkButton from '../components/layout/LinkButton';

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
            <time dateTime={new Date(events[0].time).toISOString()}>{moment(events[0].time).format('LLLL')}</time>
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

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      errors: null,
      events: [],
    };
  }

  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    /* eslint-disable max-len */
    const url =
      'https://api.meetup.com/JakartaJS/events?desc=true&photo-host=public&page=1&sig_id=246266290&sig=ddf6a4c4c3fb24dee8fd3869bc8a2e718763bbbe';
    /* eslint-enable max-len */
    fetch(proxyUrl + url)
      .then(res => res.json())
      .then(json =>
        this.setState({
          loading: false,
          events: json,
        }),
      )
      .catch(err =>
        this.setState({
          loading: false,
          errors: err.stack,
        }),
      );
  }

  render() {
    const { data } = this.props;
    const { loading, errors, events } = this.state;

    return (
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
        <NextEventSection>
          {loading
            ? IndexPage.renderLoading()
            : errors
              ? IndexPage.renderErrors(errors)
              : IndexPage.renderEvent(events)}
        </NextEventSection>
        <JoinUsSection>
          <JoinUsContainer>
            <h2>Join Us</h2>
            <p>
              Our meetups are free to attend and open to anyone. You can also join our Slack and talk with members of
              community, as well as experts in their field.
            </p>
            <div>
              <AnchorButton href="https://jakartajs-join.herokuapp.com/" kind="invertedsecondary" size="medium" newTab>
                Join Our Slack
              </AnchorButton>{' '}
              <LinkButton to="/events" kind="invertedwhite" size="medium" newTab>
                View Past Events
              </LinkButton>
            </div>
          </JoinUsContainer>
        </JoinUsSection>
      </PageMain>
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
