import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Не будь лошком
        </p>
        <a
          className="App-link"
          href="https://www.mstu.edu.ru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Учись в МГТУ!
        </a>
      </header>
    </div>
  );
}

export default App;
