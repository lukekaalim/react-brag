// @flow
import snarkdown from 'snarkdown';
import React from 'react';
import styled from 'styled-components';

type Props = {
  source: string,
};

const ReadmeArticle = styled.article`
  padding: 32px;
  font-family: 'Ubuntu Mono';
  min-width: 128px;
  pre {
    background-color: black;
    color: white;
    padding: 16px;
    border-radius: 4px;
    overflow-x: auto;
  }
`;

const MarkdownReadme = ({ source }: Props) => (
  <ReadmeArticle dangerouslySetInnerHTML={ { __html: snarkdown(source)} } />
);

export default MarkdownReadme;
