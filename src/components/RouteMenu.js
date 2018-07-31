// @flow
import React from 'react';
import {
  SideMenuContainer,
  SideMenuButton,
  SideMenuButtonHighlighted,
} from './SideMenu';

import type { Route } from './Router';

type Props = {
  routes: Array<Route>,
  currentRouteIndex: number,
  navigate: (routeIndex: number) => void,
  sideMenuColor?: string,
};

const RouteMenu = ({ routes, navigate, currentRouteIndex, sideMenuColor }: Props) => (
  <SideMenuContainer sideMenuColor={sideMenuColor}>
    {
      routes.map((route, index) => index !== currentRouteIndex ?
        <SideMenuButton key={index} onClick={() => navigate(index)}>
          {route.name}
        </SideMenuButton>
        :
        <SideMenuButtonHighlighted key={index} disabled>
          {route.name}
        </SideMenuButtonHighlighted>
      )
    }
  </SideMenuContainer>
);

export default RouteMenu;
