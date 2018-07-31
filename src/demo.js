// @flow
import React from 'react';

import Brag from './index';

const LibraryFactory = ({ library = {} }: any) => <Brag components={[]} library={library} />;

const LIBRARY = {
  name: '🏆 react-brag',
  abstract: 'A small react library to help show off your components',
  description: 'React Brag is a react library build to help you quickly show off your components',
  importStatement: 'import Brag, { Skeleton } from \'react-brag\';',
  version: '1.0.0',
};

const COMPONENTS = [
  {
    name: '<Brag />',
    factory: LibraryFactory,
    propsDesc: [
      { propName: 'library', propType: { type: 'json' }, initialValue: LIBRARY },
    ],
    displayType: 'presentational',
  },
];

const BragDemo = () => (
  <Brag
    library={LIBRARY}
    components={COMPONENTS}
  />
);

export default BragDemo;
