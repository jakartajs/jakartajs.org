import styled from 'react-emotion';
import { formatPx } from '../../styles/utils';

const HomepageHeaderImage = styled('img')`
  display: none;

  @media screen and (min-width: ${props => formatPx(props.theme.pxSizes.breakpoints.lg)}) {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0.25;
    bottom: -25%;

    @supports (object-fit: cover) {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default HomepageHeaderImage;
