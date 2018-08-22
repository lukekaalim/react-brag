// @flow
import { injectGlobal } from 'styled-components';

import Brag from './components/Brag';
import SimpleComponentView from './components/view/SimpleComponentView';
import MarkdownReadme from './components/readme/MarkdownReadme';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');
`;

export {
  SimpleComponentView,
  MarkdownReadme,
};
export default Brag;
