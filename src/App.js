import logo from './logo.svg';
import './App.css';
import MainUI from './components/MainUI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainUI />
        <div className="App-logo" role="img" aria-label="heart">
          ❤️
        </div>
      </header>
    </div>
  );
}

export default App;
