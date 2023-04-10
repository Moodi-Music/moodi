import logo from './logo.svg';
import './App.css';
import Happy_List from './Happy';
import Sad_List from './Sad';
import Tired_List from './Tired';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>How Do You Feel ?</h1>
        <Happy_List/>
        <Sad_List/>
        <Tired_List/>
      
      </header>
    </div>
  );
}

export default App;
