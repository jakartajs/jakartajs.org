import React from 'react';
import classnames from 'classnames';
import { transparentize } from 'polished';
import * as PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';

import { formatPx, formatEm } from '../../styles/utils';
import Container from './Container';
import Logo from './Logo';

const Masthead = ({ menuItems, isHomepage }) => (
  <MastheadRoot className={classnames(isHomepage && 'is-homepage')}>
    <Container>
      <MastheadInner>
        <MastheadLogo>
          <Link href="/" to="/">
            <Logo transparent height={48} />
          </Link>
        </MastheadLogo>
        <MastheadNav>
          {menuItems.map(item => (
            <MastheadNavLink key={item.name} href={item.path} to={item.path} activeClassName="is-active">
              {item.name}
            </MastheadNavLink>
          ))}
        </MastheadNav>
      </MastheadInner>
    </Container>
  </MastheadRoot>
);

Masthead.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  isHomepage: PropTypes.bool,
};

Masthead.defaultProps = {
  isHomepage: false,
};

export default Masthead;

const MastheadRoot = styled('header')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${props => formatEm(props.theme.emSizes.containerPadding)};
  color: ${props => props.theme.pallette.grey100};
  background-color: ${props => props.theme.pallette.grey900};
  height: ${props => formatPx(props.theme.pxSizes.heights.header)};
  z-index: 15;

  &.is-homepage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: none;
  }
`;

const MastheadInner = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const MastheadLogo = styled('div')`
  & a {
    &:hover {
      text-decoration: none;
    }
  }

  & img {
    max-height: 48px;
    vertical-align: middle;
  }
`;

const MastheadNav = styled('nav')`
  height: 100%;
`;

const MastheadNavLink = styled(Link)`
  height: 100%;
  margin: 0 1rem;
  padding: 0.25rem 0;
  color: ${props => transparentize(0.3, props.theme.pallette.grey100)};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${props => props.theme.pallette.grey100};
  }

  &.is-active {
    color: ${props => props.theme.pallette.grey100};
    text-decoration: underline;
  }
`;
