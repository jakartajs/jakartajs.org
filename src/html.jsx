/* eslint-disable react/prefer-stateless-function, react/forbid-prop-types, react/require-default-props */

import React from 'react';
import * as PropTypes from 'prop-types';

class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    htmlAttributes: PropTypes.object.isRequired,
    bodyAttributes: PropTypes.object.isRequired,
    preBodyComponents: PropTypes.arrayOf(PropTypes.node).isRequired,
    postBodyComponents: PropTypes.arrayOf(PropTypes.node).isRequired,
    headComponents: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  render() {
    const { htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents } = this.props;

    return (
      <html lang="en" {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="144x144" href="/windows-tile-icon.png" />
          <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          {headComponents}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

export default HTML;
