/* eslint-disable react/prefer-stateless-function, react/prop-types */

import React from 'react';
import * as PropTypes from 'prop-types';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    // eslint-disable-next-line
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    preBodyComponents: PropTypes.arrayOf(PropTypes.node).isRequired,
    postBodyComponents: PropTypes.arrayOf(PropTypes.node).isRequired,
    headComponents: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="144x144" href="/windows-tile-icon.png" />
          <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
