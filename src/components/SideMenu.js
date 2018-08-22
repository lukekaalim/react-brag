// @flow
import styled from 'styled-components';

type Props = {
  color: string,
};

export const SideMenu = styled.nav`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-right: solid 1px black;
  box-shadow: 0 0 20px #bebebe;
  background-color: ${(props: Props) => props.color};
  min-width: 180px;
  flex: 0;
`;

export default SideMenu;
