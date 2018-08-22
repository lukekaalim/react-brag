// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import Page from '../Page';
import bg from '../../assets/lightBg';

type Props = {
  componentNode: Node,
};

export const ViewportMargin = styled.div`
  margin: 80px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ComponentViewport = styled.div`
  display: flex;
  flex-direction: column;
  background-position: 80px 80px;
  background-image: url(${bg});
  background-size: 16px;
  position: absolute;
  overflow: scroll;
  width: 100%;
  height: 100%;
`;

const SimpleComponentView = ({ componentNode }: Props) => (
  <Page>
    <ComponentViewport>
      <ViewportMargin>
        {componentNode}
      </ViewportMargin>
    </ComponentViewport>
  </Page>
);

export default SimpleComponentView;
