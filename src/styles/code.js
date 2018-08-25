import { css } from 'react-emotion';
import { darken, lighten } from 'polished';

import theme from './theme';

export default css`
  code,
  pre {
    font-family: ${theme.fonts.monospace};
  }

  code {
    padding: 0.25em 0.5em;
    border-radius: 3px;
    background-color: ${darken(0.1, theme.colors.background)};
    color: ${lighten(0.1, theme.colors.body)};
    font-size: 85%;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    code {
      padding: 0;
      background-color: transparent;
      color: ${theme.pallette.grey800};
      font-size: 100%;
    }
  }
`;
