import styled from 'react-emotion';
import { transparentize } from 'polished';
import { formatPx, formatEm } from '../../styles/utils';

const HomepageHeaderInner = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  padding: ${props => formatEm(props.theme.emSizes.containerPadding)};
  padding-top: ${props =>
    formatPx(props.theme.pxSizes.heights.header + formatEm(props.theme.emSizes.containerPadding))};
  box-shadow: ${props => transparentize(0.75, props.theme.pallette.grey900)} 0 0 125px inset;
  z-index: 2;

  @media only screen and (min-width: ${props => formatPx(props.theme.pxSizes.breakpoints.md)}) {
    padding: ${props => formatEm(props.theme.emSizes.containerPadding * 2)};
    padding-top: ${props =>
      formatPx(props.theme.pxSizes.heights.header + formatEm(props.theme.emSizes.containerPadding * 2))};
  }

  @media only screen and (min-width: ${props => formatPx(props.theme.pxSizes.breakpoints.lg)}) {
    padding: ${props => formatEm(props.theme.emSizes.containerPadding * 3)};
    padding-top: ${props =>
      formatPx(props.theme.pxSizes.heights.header + formatEm(props.theme.emSizes.containerPadding * 3))};
  }
`;

export default HomepageHeaderInner;
