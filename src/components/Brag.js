// @flow
import React from 'react';
import type { Node } from 'react';

import { HorizontalContainer, BragContainer } from './Container';
import Page from './Page';
import RouteMenu from './RouteMenu';
import Readme from './Readme';
import Router from './Router';
import PreviewWindow from './PreviewWindow';
import { getVibrantColor } from '../lib/colors';

type PropType =
  | { type: 'enum', values: Array<string> }
  | { type: 'json' }
  | { type: 'string' }
  | { type: 'float' }
  | { type: 'int' }

export type PropDesc = {
  propName: string,
  propType: PropType,
  initialValue: any,
};

export type ComponentBrag = {
  factory: (props: any) => Node,
  displayType: 'functional' | 'presentational';
  propsDesc: Array<PropDesc>,
  name: string,
};

export type LibraryBrag = {
  name: string,
  importStatement: string,
  version: string,
  abstract: string,
  description: string,
};

type Props = {
  components: Array<ComponentBrag>,
  library: LibraryBrag,
};

const Brag = ({ components, library }: Props) => {
  const readmeRoute = {
    name: '📖 Readme',
    node: <Page><Readme components={components} library={library} /></Page>,
  };
  const componentRoutes = components.map(component => ({
    name: component.name,
    node: <Page><PreviewWindow component={component} /></Page>,
  }));

  const routes = [readmeRoute, ...componentRoutes];

  return (
    <BragContainer>
      <HorizontalContainer>
        <Router
          routes={routes}
          renderMenu={(navigate, currentRouteIndex, routes) => (
            <RouteMenu
              sideMenuColor={getVibrantColor(library.name)}
              routes={routes}
              navigate={navigate}
              currentRouteIndex={currentRouteIndex}
            />
          )}
        />
      </HorizontalContainer>
    </BragContainer>
  );
};

export default Brag;
