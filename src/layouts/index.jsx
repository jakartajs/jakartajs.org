/* eslint-disable import/extensions, import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

import 'typeface-ibm-plex-mono';
import 'typeface-ibm-plex-sans';
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

const TemplateWrapper = ({ children, isHomepage }) => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            title
            subtitle
            description
          }
        }
      }
    `}
  >
    {data => (
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
          <Masthead siteName={data.site.siteMetadata.title} isHomepage={isHomepage} menuItems={menuItems} />
          {children}
          <Footer siteName={data.site.siteMetadata.title} />
        </Root>
      </ThemeProvider>
    )}
  </StaticQuery>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
  }).isRequired,
  isHomepage: PropTypes.bool,
  location: PropTypes.shape({}).isRequired,
};

TemplateWrapper.defaultProps = {
  isHomepage: false,
};

export default TemplateWrapper;

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
