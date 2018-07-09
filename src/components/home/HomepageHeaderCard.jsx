import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import { transparentize } from 'polished';

const HomepageHeaderCard = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

HomepageHeaderCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Wrapper = styled('div')`
  padding: 1.5rem;
  margin: 0 auto;
  max-width: 680px;
  text-align: center;
  background-color: ${props => transparentize(0.25, props.theme.pallette.grey100)};
  color: ${props => props.theme.pallette.grey800};
`;

const Title = styled('h1')`
  margin-top: 0;
  color: ${props => props.theme.pallette.grey800};
`;

export default HomepageHeaderCard;
