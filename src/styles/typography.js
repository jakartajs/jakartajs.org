import { css } from 'react-emotion';

import theme from './theme';
import { formatPx } from './utils';

export default css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.414rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.sansSerif};
    font-weight: 400;
    line-height: 1.25;
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: 2.074rem;

    @media (min-width: ${formatPx(theme.pxSizes.breakpoints.md)}) {
      font-size: 2.441rem;
    }
  }

  h2 {
    font-size: 1.728em;

    @media (min-width: ${formatPx(theme.pxSizes.breakpoints.md)}) {
      font-size: 1.953rem;
    }
  }

  h3 {
    font-size: 1.44em;

    @media (min-width: ${formatPx(theme.pxSizes.breakpoints.md)}) {
      font-size: 1.563rem;
    }
  }

  h4,
  h5,
  h6 {
    font-size: 1.2em;

    @media (min-width: ${formatPx(theme.pxSizes.breakpoints.md)}) {
      font-size: 1.25rem;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: ${theme.colors.heading};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: 0.5rem;
  }

  hr {
    position: relative;
    margin: 1rem 0;
    border: 0;
    border-top: 1px solid ${theme.colors.border};
  }

  blockquote {
    margin: 0.8rem 0;
    padding: 0.5rem 1rem;
    border-left: 0.25rem solid ${theme.colors.border};
    color: ${theme.pallette.grey600};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${formatPx(theme.pxSizes.breakpoints.md)}) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }
`;
