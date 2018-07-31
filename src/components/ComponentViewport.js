// @flow
import styled from 'styled-components';
import bg from '../assets/light-bg.png';

const source: string = ((bg: any): Image).src;

export const ViewportMargin = styled.div`
  margin: 80px;
`;

export const ComponentViewport = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  background-position: 80px 80px;
  background-image: url(${() => source});
  background-size: 16px;
  image-rendering: optimizespeed;
  position: relative;
  overflow: scroll;
`;
