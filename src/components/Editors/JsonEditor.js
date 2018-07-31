// @flow
import React from 'react';
import styled from 'styled-components';

import { getVibrantColor } from '../../lib/colors';
import { EditorContainer, EditorTitle } from './Editor';
import type { PropDesc } from '../Brag';

type Props = {
  propDesc: PropDesc,
  currentProps: any,
  onEdit: (newProps: any) => void;
};

const tryParse = (json, fallback) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    return fallback;
  }
};

const JsonTextArea = styled.textarea`
  flex: 4;
  resize: none;
`;

const JsonEditor = ({ currentProps, onEdit, propDesc }: Props) => (
  <EditorContainer color={getVibrantColor(propDesc.propName)}>
    <EditorTitle>{propDesc.propName}</EditorTitle>
    <JsonTextArea
      onChange={event => onEdit({
        ...currentProps,
        [propDesc.propName]: tryParse(event.target.value, currentProps[propDesc.propName])
      })}
      value={JSON.stringify(currentProps[propDesc.propName], null, 3)}
    />
  </EditorContainer>
);

export default JsonEditor;
