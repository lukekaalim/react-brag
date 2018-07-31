// @flow
import React from 'react';
import type { Node } from 'react';

import { HorizontalContainer } from './Container';
import Page from './Page';
import RouteMenu from './RouteMenu';
import Readme from './Readme';
import Router from './Router';

export type ComponentBrag<T: {}> = {
  factory: (props: T) => Node,
  props: Array<{
    propName: string,
    propType: Array<string>,
    initialValue: string
  }>,
  name: string,
};

export type LibraryBrag = {
  name: string,
  abstract: string,
  description: string,
};

type Props = {
  components: Array<ComponentBrag<any>>,
  library: LibraryBrag,
};

const Brag = ({ components, library }: Props) => (
  <HorizontalContainer>
    <Router
      routes={[
        {
          name: '📖 Readme',
          node: (
            <Page>
              <Readme
                components={components}
                title={library.name}
                description={library.description}
                abstract={library.abstract}
              />
            </Page>
          )
        },
        ...components.map(component => ({
          name: component.name,
          node: <Page>{component.factory()}</Page>,
        }))
      ]}
      renderMenu={(navigate, currentRouteIndex, routes) => (
        <RouteMenu
          routes={routes}
          navigate={navigate}
          currentRouteIndex={currentRouteIndex}
        />
      )}
    />
  </HorizontalContainer>
);

export default Brag;
