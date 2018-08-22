// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import SideMenu from './SideMenu';
import SideMenuButton from './SideMenuButton';
import SimpleRouter from './SimpleRouter';

const BragContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: white;
`;

type Props = {
  readme: Node,
  components: Array<{ name: string, node: Node }>,
  color?: string,
};

const Brag = ({ readme, components, color = '#fff' }: Props) => {
  const routes = [
    { name: '📖 readme', node: readme },
    ...components,
  ];

  return (
    <SimpleRouter
      render={(currentRouteIndex, navigate) => (
        <BragContainer>
          <SideMenu color={color}>
            {routes.map((route, routeIndex) =>
              <SideMenuButton
                key={routeIndex}
                disabled={routeIndex === currentRouteIndex}
                onClick={() => navigate(routeIndex)}
              >{route.name}</SideMenuButton>
            )}
          </SideMenu>
          {routes[currentRouteIndex].node}
        </BragContainer>
      )}
    />
  );
};

export default Brag;
