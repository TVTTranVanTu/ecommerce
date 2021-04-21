import './scss/main.scss';
import Header from './Components/Header';
import Topbar from './Components/Topbar';
import Home from './Layouts/Home';
import './App.css';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingIn from './Layouts/SignIn';
import Register from './Layouts/Register';
import ProductScreen from './Layouts/ProductScreen';
import PageLayout from './Layouts/PageLayout';
import UserProfile from './Layouts/UserProfile';
import RouterCategory from './Routers/routerCategory';
import SellerLogin from './Layouts/SellerLogin';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Topbar />
          <Header />
        </div>
        <div>
          <Switch>
            <Route
              exact path="/"
              render={(props) => { return <PageLayout content={<Home {...props} />} /> }} />
            <Route
              exact
              path="/signin"
              render={(props) => { return <PageLayout content={<SingIn {...props} />} /> }} />
            <Route
              exact
              path="/register"
              render={(props) => { return <PageLayout content={<Register {...props} />} /> }} />
            <Route
              exact
              path="/seller-login"
              render={(props) => { return <PageLayout content={<SellerLogin {...props} />} /> }} />
            <Route
              exact
              path="/:flug.cat:id"
              render={(props) => { return <RouterCategory  {...props} /> }} />

            <Route
              exact
              path="/:name.:id"
              render={(props) => { return <PageLayout content={<ProductScreen {...props} />} /> }} />
            <Route
              exact
              path="/account"
              render={(props) => { return <PageLayout content={<UserProfile {...props} />} /> }} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
