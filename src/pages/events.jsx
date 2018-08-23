/* eslint-disable no-nested-ternary */

import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import moment from 'moment';
import styled from 'react-emotion';

import PageContainer from '../components/page/PageContainer';
import AnchorButton from '../components/layout/AnchorButton';
import { EventCard, EventTitle, EventEmpty, EventLoading } from '../components/events/EventCard';
import PageHeader from '../components/page/PageHeader';
import PageMain from '../components/page/PageMain';
import EventDate from '../components/events/EventCard/EventDate';
import EventLocation from '../components/events/EventCard/EventLocation';
import PageContent from '../components/page/PageContent';

class EventsPage extends React.Component {
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
    return <EventLoading />;
  }

  static renderEvents(events) {
    return events.length !== 0 ? (
      events.map(event => (
        <EventCard key={event.id}>
          <EventDate dateTime={new Date(event.time).toISOString()}>{moment(event.time).format('LLLL')}</EventDate>
          <EventTitle>{event.name}</EventTitle>
          <EventLocation>
            <strong>{event.venue.name}</strong>
            &middot;
            {event.venue.address_1}
          </EventLocation>
        </EventCard>
      ))
    ) : (
      <EventEmpty />
    );
  }

  static renderErrors(errors) {
    return (
      <div>
        <h3 style={{ marginTop: 0 }}>Something bad happened.</h3>
        <p>{errors}</p>
      </div>
    );
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
      'https://api.meetup.com/JakartaJS/events?desc=true&photo-host=public&page=10&sig_id=246266290&status=past&sig=cc814c7fd928ddf63515374e5cc6ced7b20fbca2';
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
          title={`Events · ${data.site.siteMetadata.title}`}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { property: 'og:title', content: 'Events' },
            { property: 'og:description', content: data.site.siteMetadata.description },
          ]}
        />
        <PageHeader>
          <h1>Events</h1>
          <p className="lead">Our meetups are normally held on the 2nd or 3rd Tuesday of any month.</p>
        </PageHeader>
        <PageContent>
          <PageContainer>
            {loading
              ? EventsPage.renderLoading()
              : errors
                ? EventsPage.renderErrors(errors)
                : EventsPage.renderEvents(events)}

            <ButtonWrapper>
              <AnchorButton size="large" href="https://www.meetup.com/JakartaJS/events/past/" newTab>
                View Past Events
              </AnchorButton>
            </ButtonWrapper>
          </PageContainer>
        </PageContent>
      </PageMain>
    );
  }
}

export default EventsPage;

export const query = graphql`
  query EventsPageQuery {
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
