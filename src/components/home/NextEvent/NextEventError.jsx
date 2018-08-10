import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import NextEventHeader from './NextEventHeader';
import NextEventContainer from './NextEventContainer';

const NextEventError = ({ errors }) => (
  <NextEventHeader>
    <NextEventContainer>
      <H3>Something bad happened.</H3>
      <p>{errors}</p>
    </NextEventContainer>
  </NextEventHeader>
);

NextEventError.propTypes = {
  errors: PropTypes.string.isRequired,
};

export default NextEventError;

const H3 = styled('h3')`
  margin-top: 0;
`;
