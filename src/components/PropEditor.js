// @flow
import React from 'react';
import styled from 'styled-components';
import type { PropDesc } from './Brag';

import JsonEditor from './Editors/JsonEditor';
import IntegerEditor from './Editors/IntegerEditor';

const PropWindow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: white;
  overflow: auto;
`;

const UnknownPropType = styled.div`
  background-color: grey;
  flex: 1;
  display: flex;
`;

type Props = {
  propsDesc: Array<PropDesc>,
  currentProps: any,
  onEditProp: (newProps: any) => void;
};

const PropEditor = ({ propsDesc, onEditProp, currentProps }: Props) => (
  <PropWindow>
    {propsDesc.map(propDesc => {
      switch (propDesc.propType.type) {
      case 'int':
        return <IntegerEditor
          key={propDesc.propName}
          currentProps={currentProps}
          onEdit={onEditProp}
          propDesc={propDesc}
        />;
      case 'json':
        return <JsonEditor
          key={propDesc.propName}
          currentProps={currentProps}
          onEdit={onEditProp}
          propDesc={propDesc}
        />;
      default:
        return <UnknownPropType key={propDesc.propName}>{propDesc.propName}</UnknownPropType>;
      }
    })}
  </PropWindow>
);

export default PropEditor;