import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box'

import AppBar from './AppBar'
import LeftBar from './LeftBar'

type PageProps = {
  children: JSX.Element
}

const StyledBox = styled(Box)`
  margin-top: 2vh;
  margin-left: 1vw;
  margin-right: 1vw;
`;

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <AppBar />
      <LeftBar />
      <StyledBox>
        {children}
      </StyledBox>
    </>
  );
};

export default Page