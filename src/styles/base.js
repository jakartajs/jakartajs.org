import { css } from 'react-emotion';
import { darken } from 'polished';

import theme from './theme';
import { formatPx } from './utils';

export default css`
  /* Set up a decent box model on the root element */
  html {
    box-sizing: border-box;
  }

  /*
   * Make all elements from the DOM inherit from the parent box-sizing
   * Since '*' has a specificity of 0, it does not override the 'html' value
   * making all elements inheriting from the root box-sizing value
   * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
   */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    color: ${theme.colors.body};
    background-color: ${theme.colors.background};
    font-family: ${theme.fonts.sansSerif};
    font-size: ${formatPx(theme.pxSizes.fontSizes.md)};
    line-height: ${theme.emSizes.lineHeight.body};
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;

    @media (min-width: ${formatPx(theme.pxSizes.breakpoints.lg)}) {
      font-size: ${formatPx(theme.pxSizes.fontSizes.lg)};
    }
  }

  a {
    color: ${theme.colors.brand};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  /* Figure elements */
  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${theme.colors.border};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0.25rem 0.5rem;
    border: 1px solid ${theme.colors.border};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-child(odd) {
        td {
          background-color: ${darken(0.05, theme.colors.background)};
        }

        tr {
          background-color: ${darken(0.05, theme.colors.background)};
        }
      }
    }
  }
`;
