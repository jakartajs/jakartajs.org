import React from 'react';
import styled from 'react-emotion';
import NextEventHeader from './NextEventHeader';
import NextEventContainer from './NextEventContainer';

const NextEventEmpty = () => (
  <NextEventHeader>
    <NextEventContainer>
      <H3>There are no upcoming events at the moment.</H3>
      <p>In the meantime, why not join our Slack?</p>
    </NextEventContainer>
  </NextEventHeader>
);

export default NextEventEmpty;

const H3 = styled('h3')`
  margin-top: 0;
`;
