import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'react-emotion';

import NextEventHeader from './NextEventHeader';
import NextEventContainer from './NextEventContainer';
import Loading from '../../layout/Loading';

const NextEventLoading = ({ className }) => (
  <NextEventHeader>
    <NextEventContainer>
      <Div className={classnames(className)}>
        <Loading />
      </Div>
    </NextEventContainer>
  </NextEventHeader>
);

NextEventLoading.propTypes = {
  className: PropTypes.string,
};

NextEventLoading.defaultProps = {
  className: null,
};

export default NextEventLoading;

const Div = styled('div')`
  width: 100%;
  margin: 5rem 0;
  text-align: center;
`;
