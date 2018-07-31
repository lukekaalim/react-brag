// @flow
import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');
`;

import Brag from './components/Brag';
import Skeleton from './components/Skeleton';

export {
  Skeleton
};

export default Brag;
