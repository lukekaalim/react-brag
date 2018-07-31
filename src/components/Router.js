// @flow
import React, { PureComponent, Fragment } from 'react';
import type { Node } from 'react';

export type Route = { name: string, node: Node };

const IDENTITY = input => input;

type Props = {
  routes: Array<Route>;
  renderMenu: (
    navigate: (index: number) => void,
    currentIndex: number,
    routes: Array<Route>,
  ) => Node,
  renderPage?: (page: Node) => Node,
};

type State = {
  currentRouteIndex: number,
}

class Router extends PureComponent<Props, State> {
  state = {
    currentRouteIndex: 0,
  };

  render() {
    const { routes, renderMenu, renderPage = IDENTITY } = this.props;
    const { currentRouteIndex } = this.state;
    const currentRouteNode = routes[currentRouteIndex].node;

    const navigate = (newIndex: number) => this.setState({ currentRouteIndex: newIndex });
    return (
      <Fragment>
        {renderMenu(navigate, currentRouteIndex, routes)}
        {renderPage(currentRouteNode)}
      </Fragment>
    );
  }
}

export default Router;
