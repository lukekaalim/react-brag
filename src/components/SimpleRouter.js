// @flow
import { PureComponent } from 'react';
import type { Node } from 'react';

type Props = {
  render: (index: number, navigate: (newIndex: number) => void) => Node,
};

type State = {
  index: number,
};

class SimpleRouter extends PureComponent<Props, State> {
  state = {
    index: 0,
  };

  navigate = (newIndex: number) => this.setState({ index: newIndex });

  render() {
    return this.props.render(this.state.index, this.navigate);
  }
}

export default SimpleRouter;
