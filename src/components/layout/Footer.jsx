import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { formatEm } from '../../styles/utils';

const Footer = ({ siteName }) => (
  <FooterRoot>
    <FooterInner>
      <p>
        <small>&copy; {siteName} 2018</small>
      </p>
      <p>
        <small>
          <a href="https://twitter.com/JakartaJS" target="_blank" rel="noopener noreferrer">
            Follow us on Twitter
          </a>
        </small>
      </p>
    </FooterInner>
  </FooterRoot>
);

Footer.propTypes = {
  siteName: PropTypes.string.isRequired,
};

export default Footer;

const FooterRoot = styled('footer')`
  padding: ${props =>
    `${formatEm(props.theme.emSizes.containerPadding / 2)} ${formatEm(props.theme.emSizes.containerPadding)}`};
  color: ${props => props.theme.pallette.grey100};
  background-color: ${props => props.theme.pallette.grey900};

  p {
    margin: 0;
  }
`;

const FooterInner = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
