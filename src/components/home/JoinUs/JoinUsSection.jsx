import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { transparentize } from 'polished';

const JoinUsSection = ({ children }) => <Root>{children}</Root>;

JoinUsSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JoinUsSection;

const Root = styled('section')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  min-height: 280px;
  padding: 2rem 1rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.body};
  box-shadow: ${props => transparentize(0.75, props.theme.pallette.grey900)} 0 0 125px inset;
  text-align: center;

  h2 {
    margin-top: 0;
    color: ${props => props.theme.colors.heading};
  }
`;
