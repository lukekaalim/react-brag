// @flow
import styled from 'styled-components';

const BUTTON_COLOR = 'rgb(200, 200, 200)';
const BUTTON_DISABLED_COLOR = 'rgb(250, 250, 250)';

type Props = {
  disabled: boolean,
};

const SideMenuButton = styled.button`
  background-color: ${(props: Props) => props.disabled ? BUTTON_COLOR : BUTTON_DISABLED_COLOR};
  margin: 7px;
  color: rgb(0, 0, 0);
  padding: 20px;
  font-family: 'Ubuntu Mono';
  border-radius: 10px;
`;

export default SideMenuButton;
