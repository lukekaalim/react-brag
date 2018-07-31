// @flow
import styled from 'styled-components';

export const EditorContainer = styled.div`
  flex: 1;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 600px;
`;

export const EditorTitle = styled.h2`
  text-align: center;
  margin: 0;
`;
