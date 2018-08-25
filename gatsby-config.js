/* eslint-disable strict,max-len */

'use strict';

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'JakartaJS',
    subtitle: 'Jakarta JavaScript User Group',
    description:
      'Come and meet other developers interested in the JavaScript and its ecosystem in the Greater Jakarta area.',
    siteUrl: 'https://www.jakartajs.org',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.05rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.jakartajs.org',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
  ],
};
