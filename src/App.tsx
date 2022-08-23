import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// eslint-disable-next-line 
declare let window: any

const uiTheme = createTheme();

const App: React.FC = () => {

  return (
    <ThemeProvider theme={uiTheme}>
        Hello world!
    </ThemeProvider>
  )
}

export default App