// @flow
import React from 'react';
import styled from 'styled-components';

import type { ComponentBrag } from './Brag';

type Props = {
  components: Array<ComponentBrag<any>>,
  abstract: string,
  title: string,
  description: string,
};

const ReadmeContainer = styled.article`
  padding: 48px;
`;

const TableOfContentsItem = styled.li`
  margin: 5px;
`;

const mapComponentToListItem = (component) => (
  <TableOfContentsItem>{component.name}</TableOfContentsItem>
);

const Readme = ({ components, abstract, title, description }: Props) => (
  <ReadmeContainer>
    <header>
      <h1>{title}</h1>
      <p>{abstract}</p>
      <h2>Components</h2>
      <nav>
        <ol>
          {components.map(mapComponentToListItem)}
        </ol>
      </nav>
      <p>{description}</p>
    </header>

  </ReadmeContainer>
);

export default Readme;
