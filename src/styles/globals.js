/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'react-emotion';
import normalize from './normalize';
import base from './base';
import typography from './typography';

injectGlobal`
  ${normalize}
  ${base}
  ${typography}
`;
