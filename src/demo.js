import React from 'react';

import Brag from './index';

const COMPONENTS = [
  { name: '<Brag />', factory: () => <p>N/A</p>, },
];

const LIBRARY = {
  name: '🏆 react-brag',
  abstract: 'A small react library to help show off your components',
  description: '',
};

const BragDemo = () => (
  <Brag
    library={LIBRARY}
    components={COMPONENTS}
  />
);

export default BragDemo;
