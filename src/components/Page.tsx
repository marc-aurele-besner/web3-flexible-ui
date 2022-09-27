import React from 'react';

import AppBar from './AppBar'
import LeftBar from './LeftBar'
import { StyledView } from './styles'

type PageProps = {
  children: JSX.Element
}

const Page: React.FC<PageProps> = ({ children }) => {

  return (
    <article>
      <AppBar />
      <LeftBar />

      <StyledView>
        {children}
      </StyledView>
    </article>
  );
};

export default Page