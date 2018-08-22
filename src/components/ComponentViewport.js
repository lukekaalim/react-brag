// @flow
import styled from 'styled-components';
import bg from '../assets/lightBg';

export const ViewportMargin = styled.div`
  margin: 80px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ComponentViewport = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  background-position: 80px 80px;
  background-image: url(${bg});
  background-size: 16px;
  position: relative;
  overflow: scroll;
`;
