// @flow
import React from 'react';
import styled from 'styled-components';

import type { ComponentBrag, LibraryBrag } from './Brag';

type Props = {
  components: Array<ComponentBrag>,
  library: LibraryBrag,
};

const ReadmeContainer = styled.article`
  padding: 48px;
`;

const TableOfContentsItem = styled.li`
  margin: 5px;
`;

const CodeBlock = styled.pre`
  border-radius: 15px;
  background-color: black;
  color: white;
  padding: 20px;
`;

const mapComponentToListItem = (component, index) => (
  <TableOfContentsItem key={index}>{component.name}</TableOfContentsItem>
);

const Readme = ({ components, library }: Props) => (
  <ReadmeContainer>
    <header>
      <h1>{library.name}</h1>
      <p>{library.abstract}</p>
      <CodeBlock>{library.importStatement}</CodeBlock>
      <h2>Components</h2>
      {
        components.length > 0 && (
          <nav>
            <ol>
              {components.map(mapComponentToListItem)}
            </ol>
          </nav>
        )
      }
      <p>{library.description}</p>
    </header>

  </ReadmeContainer>
);

export default Readme;
