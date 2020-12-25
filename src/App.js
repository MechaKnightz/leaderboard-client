import logo from './logo.svg';
import './App.css';
import LoginButton from './login-button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginButton></LoginButton>
      </header>
    </div>
  );
}

export default App;
