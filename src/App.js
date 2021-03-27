import './scss/main.scss';
import Header from './Components/Header';
import Topbar from './Components/Topbar';
import Home from './Layouts/Home';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Topbar />
        <Header />
      </div>
      <Home />
    </div>
  );
}

export default App;
