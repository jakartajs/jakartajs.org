/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

import 'typeface-ibm-plex-mono';
import 'typeface-ibm-plex-sans';
import 'normalize.css';
import '../styles/globals';

import Masthead from '../components/layout/Masthead';
import Footer from '../components/layout/Footer';
import theme from '../styles/theme';

const menuItems = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Events',
    path: '/events',
  },
];

const TemplateWrapper = ({ children, data, location }) => (
  <ThemeProvider theme={theme}>
    <Root>
      <Helmet
        title={`${data.site.siteMetadata.title} · ${data.site.siteMetadata.subtitle}`}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { property: 'og:site_name', content: data.site.siteMetadata.title },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: data.site.siteMetadata.title },
          { property: 'og:description', content: data.site.siteMetadata.description },
        ]}
      />
      <Masthead siteName={data.site.siteMetadata.title} isHomepage={location.pathname === '/'} menuItems={menuItems} />
      {children()}
      <Footer siteName={data.site.siteMetadata.title} />
    </Root>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
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

export default TemplateWrapper;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
      }
    }
  }
`;

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
