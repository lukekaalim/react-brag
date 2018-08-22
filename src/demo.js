// @flow
import React from 'react';
import Brag, { MarkdownReadme, SimpleComponentView } from './index';

const README = `
# 🏆 React Brag
_A cute way to render react components for demoing._

## Description
React Brag is a set of Components that help you show off your fancy new components. Useful
for documenting a front end Component Library that is being consumed by other projects.

Has cool features like:
- Markdown readme component (like the one ur reading)
- Runtime prop injection
- Pixel measurement tools
- Adjustable display canvas (test on different devices, contexts, screen resolutions)

## Installation
Add to your demo.html page
\`\`\`html
  <script crossorigin src="https://unpkg.com/react-brag/dist/index.umd.js"></script>
\`\`\`

Or add as a \`devDependency\`
\`\`\`
  npm i -D react-brag
\`\`\`
`;

/*
  abstract: 'A small react library to help show off your components',
  description: 'React Brag is a react library build to help you quickly show off your components',
  importStatement: 'import Brag, { Skeleton } from \'react-brag\';',
  version: '1.0.0',
*/

const EXAMPLE_BRAG = (
  <Brag
    name="🏆 react-brag"
    readme={<MarkdownReadme source={README} />}
    components={[]}
    color="#ffae26"
  />
);

const COMPONENTS = [
  {
    name: '🏆 <Brag />',
    node: <SimpleComponentView componentNode={EXAMPLE_BRAG} />,
  },
];


const BragDemo = () => (
  <Brag
    name="🏆 react-brag"
    readme={<MarkdownReadme source={README} />}
    components={COMPONENTS}
    color="#ffae26"
  />
);

export default BragDemo;
