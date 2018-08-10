import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'react-emotion';

import Loading from '../../layout/Loading';

const EventLoading = ({ className }) => (
  <Div className={classnames(className)}>
    <Loading />
  </Div>
);

EventLoading.propTypes = {
  className: PropTypes.string,
};

EventLoading.defaultProps = {
  className: null,
};

export default EventLoading;

const Div = styled('div')`
  width: 100%;
  margin: 2rem 0;
  text-align: center;
`;
