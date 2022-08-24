import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import AppBar from './components/AppBar'
import LeftBar from './components/LeftBar'
import { 
  StyledView,
  StyledActionBody
 } from './components/styles'

// eslint-disable-next-line 
declare let window: any

const uiTheme = createTheme();

const App: React.FC = () => {

  return (
    <ThemeProvider theme={uiTheme}>
      <AppBar />
      <LeftBar />

      <StyledView>
        Hello world!
      </StyledView>
    </ThemeProvider>
  )
}

export default App