// @flow
import styled from 'styled-components';

export const SideMenuButtonHighlighted = styled.button`
  margin: 2px 0px;
  padding: 20px;
  font-family: 'Ubuntu Mono', monospace;
`;

export const SideMenuButton = styled.button`
  background-color: rgb(250, 250, 250);
  margin: 2px 0px;
  color: rgb(0, 0, 0);
  padding: 20px;
  font-family: 'Ubuntu Mono', monospace;
`;

export const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  border-right: solid 1px black;
  box-shadow: 0 0 20px #bebebe;
  background-color: #5b14d7;
  padding: 5px;
`;
