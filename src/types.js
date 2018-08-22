// @flow
import type { Node } from 'react';

export type AuthorDescription = {
  name: string,
  email?: string,
  company?: string,
};

export type ComponentDescription = {
  name: string,
  node: Node,
};

export type LibraryDescription = {
  name: string,
  components: Array<ComponentDescription>,
  readme: Node,
  color?: string,
};