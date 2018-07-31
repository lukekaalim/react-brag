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

const NumberInput = styled.input`
  align-self: center;
  margin: 16px;
`;

const IntegerEditor = ({ currentProps, onEdit, propDesc }: Props) => (
  <EditorContainer color={getVibrantColor(propDesc.propName)}>
    <EditorTitle>{propDesc.propName}</EditorTitle>
    <NumberInput
      onChange={event => !isNaN(parseInt(event.target.value, 10)) && onEdit({
        ...currentProps,
        [propDesc.propName]: parseInt(event.target.value, 10),
      })}
      type="number"
      value={currentProps[propDesc.propName]}
    />
  </EditorContainer>
);

export default IntegerEditor;
