import "./scss/main.scss";
import Header from "./Components/Header";
import Topbar from "./Components/Topbar";
import Home from "./Layouts/Home";
import "./App.css";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Layouts/Register";
import ProductScreen from "./Layouts/ProductScreen";
import PageLayout from "./Layouts/PageLayout";
import UserProfile from "./Layouts/UserProfile";
import RouterCategory from "./Routers/routerCategory";
import CartScreen from "./Layouts/CartScreen";
import SalePage from "./Layouts/SalePage";
import FlashSalePage from "./Layouts/FlashSalePage";
import ShopeeMallPage from "./Layouts/ShopeeMallPage";
import SingIn from "./Layouts/SignIn";
import FormInfo from "./Layouts/FormInfo";
import ShippingAddress from "./Layouts/ShippingAddress";
import PaymentOrder from "./Layouts/PaymentOrder";
import RecommendPage from "./Layouts/RecommendPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Topbar />
          <Header />
        </div>
        <div className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <PageLayout content={<Home {...props} />} />;
              }}
            />
            <Route
              exact
              path="/cart/:id?"
              render={(props) => {
                return <PageLayout content={<CartScreen {...props} />} />;
              }}
            />
            <Route
              exact
              path="/signin"
              render={(props) => {
                return <PageLayout content={<SingIn {...props} />} />;
              }}
            />
            <Route
              exact
              path="/form-info"
              render={(props) => {
                return <PageLayout content={<FormInfo {...props} />} />;
              }}
            />
            <Route
              exact
              path="/register"
              render={(props) => {
                return <PageLayout content={<Register {...props} />} />;
              }}
            />
            <Route
              exact
              path="/shipping"
              render={(props) => {
                return <PageLayout content={<ShippingAddress {...props} />} />;
              }}
            />
            <Route
              exact
              path="/payment"
              render={(props) => {
                return <PageLayout content={<PaymentOrder {...props} />} />;
              }}
            />

            <Route
              exact
              path="/:flug.cat:id"
              render={(props) => {
                return <RouterCategory {...props} />;
              }}
            />

            <Route
              exact
              path="/:name.:id"
              render={(props) => {
                return <PageLayout content={<ProductScreen {...props} />} />;
              }}
            />
            <Route
              exact
              path="/account"
              render={(props) => {
                return <PageLayout content={<UserProfile {...props} />} />;
              }}
            />
            <Route
              exact
              path="/flash-sale"
              render={(props) => {
                return <PageLayout content={<FlashSalePage {...props} />} />;
              }}
            />
            <Route
              exact
              path="/Khung-Giờ-Săn-Sale"
              render={(props) => {
                return <PageLayout content={<SalePage {...props} />} />;
              }}
            />
            <Route
              exact
              path="/shopee-mall"
              render={(props) => {
                return <PageLayout content={<ShopeeMallPage {...props} />} />;
              }}
            />
            <Route
              exact
              path="/daily_discover"
              render={(props) => {
                return <PageLayout content={<RecommendPage {...props} />} />;
              }}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
