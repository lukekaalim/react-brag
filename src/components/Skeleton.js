// @flow
import React from 'react';
import styled from 'styled-components';
import to from 'to-case';

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SkeletonBlock = styled.div`
  padding: 8px
  background-color: #fff6;
  border: 1px solid black;
`;

const ResultsBlock = styled.pre`
  margin-left: 32px;
  background-color: white;
  padding: 16px;
`;

const PropDescriptionBlock = styled.pre`
  margin: 8px;
  margin-left: 16px;
  padding: 16px;
  background-color: white;
`;

type Props = {
  componentName: string,
  propList: Array<{ propName: string, propValue: string }>,
  results: Node,
};

const getPropString = (propList) => (
  propList
    .map(prop => (
      `${prop.propName}={${prop.propValue}}`
    ))
    .map((propDescription, index) => <PropDescriptionBlock key={index}>{propDescription}</PropDescriptionBlock>)
);

const Skeleton = ({ componentName, propList, results }: Props) => (
  <SkeletonContainer>
    <SkeletonBlock>
      &lt;{to.pascal(componentName)}
      {getPropString(propList)}
      &gt;
    </SkeletonBlock>
    <ResultsBlock>{results}</ResultsBlock>
    <SkeletonBlock>
      {`</${to.pascal(componentName)}>`}
    </SkeletonBlock>
  </SkeletonContainer>
);

export default Skeleton;
