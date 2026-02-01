import logo from './logo.svg';
import './App.css';
import MainUI from './components/MainUI';
import ValentineForm from './components/ValentineForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d81b60',
    },
    secondary: {
      main: '#ad1457',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <MainUI />
          <div className="App-logo" role="img" aria-label="heart">
            ❤️
          </div>
          <ValentineForm />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
