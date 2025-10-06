import type { ReactElement } from 'react';
import './GlobalStyles.scss';

type ChildrenType = {
  children: ReactElement;
};

function GlobalStyles({ children }: ChildrenType) {
  return children;
}

export default GlobalStyles;
