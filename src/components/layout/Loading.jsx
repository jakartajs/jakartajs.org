import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, { keyframes } from 'react-emotion';

const Loading = ({ className }) => (
  <CardRoot className={classnames(className)}>
    <DoubleBounce1 />
    <DoubleBounce2 />
  </CardRoot>
);

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: null,
};

export default Loading;

const skBounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
`;

const DoubleBounce1 = styled('div')`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.brand};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  animation: ${skBounce} 2s infinite ease-in-out;
`;

const DoubleBounce2 = styled('div')`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.brand};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  animation: ${skBounce} 2s infinite ease-in-out;
  animation-delay: -1s;
`;

const CardRoot = styled('div')`
  position: relative;
  width: 40px;
  height: 40px;
  margin: 100px auto;
`;
