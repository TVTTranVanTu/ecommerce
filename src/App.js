import './scss/main.scss';
import Header from './Components/Header';
import Topbar from './Components/Topbar';
import Home from './Layouts/Home';
import './App.css';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Topbar />
        <Header />
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
