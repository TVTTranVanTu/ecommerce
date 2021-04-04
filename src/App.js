import './scss/main.scss';
import Header from './Components/Header';
import Topbar from './Components/Topbar';
import Home from './Layouts/Home';
import './App.css';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SingIn from './Layouts/SignIn';
import Register from './Layouts/Register';
import FilterCategory from './Layouts/FilterCategory';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Topbar />
          <Header />
        </div>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/signin" component={SingIn}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/thời-trang-nam" component={FilterCategory}></Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
