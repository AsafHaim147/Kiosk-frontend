import { Container, CssBaseline, Paper, ThemeProvider, createTheme } from '@mui/material';
import HomeScreen from './screens/HomeScreen';
import Menu from './screens/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

const theme = createTheme({
  typography: {
    h1: {
      fontWeight: 'bold',
      color: 'black'
    },
    h2: {
      fontSize: '2rem',
      color: 'black',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: 'black',
    }
  },
  palette: {
    primary: { main: '#fbf7f5' },
    secondary: {
      main: '#a6c275',
      contrastText: '#ffffff'
    }


  }
});

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>



  );
}

export default App;

