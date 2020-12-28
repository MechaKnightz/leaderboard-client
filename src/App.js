import logo from './logo.svg';
import './App.css';
import Profile from './profile'
import Pages from './pages/index'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Profile></Profile>
        <Pages></Pages>
      </header>
    </div>
  );
}

export default App;
