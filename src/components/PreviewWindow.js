// @flow
import React, { PureComponent } from 'react';

import type { ComponentBrag } from './Brag';
import { VerticalContainer } from './Container';
import PropEditor from './PropEditor';
import { ViewportMargin, ComponentViewport} from './ComponentViewport';

type Props = {
  component: ComponentBrag,
}

type State = {
  previewProps: any,
};

const reduceToProps = (props, propDesc) => ({
  ...props,
  [propDesc.propName]: propDesc.initialValue,
});

class PreviewWindow extends PureComponent<Props, State> {
  state = {
    previewProps: {},
  };

  render() {
    const { component } = this.props;
    const initialProps = component.propsDesc.reduce(reduceToProps, {});
    const currentProps = { ...initialProps, ...this.state.previewProps };
    return (
      <VerticalContainer>
        <ComponentViewport>
          <ViewportMargin>
            {component.factory(currentProps)}
          </ViewportMargin>
        </ComponentViewport>
        <PropEditor
          currentProps={currentProps}
          propsDesc={component.propsDesc}
          onEditProp={previewProps => this.setState({ previewProps })}
        />
      </VerticalContainer>
    );
  }
}

export default PreviewWindow;
