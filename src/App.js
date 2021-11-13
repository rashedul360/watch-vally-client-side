import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";

import AllProducts from "./Components/Pages/AllProducts/AllProducts";
import DashBoard from "./Components/Pages/DashBoard/DashBoard";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Login from "./Components/Pages/LoginAndRegistration/Login/Login";
import Register from "./Components/Pages/LoginAndRegistration/Register/Register";

import NotFound from "./Components/Pages/NotFound/NotFound";
import Payment from "./Components/Pages/Payment/Payment";
import PrivetRoute from "./Components/Pages/PrivetRoute/PrivetRoute";
import ProductPurchase from "./Components/Pages/productPurchase/productPurchase";

function App() {
  return (
    <div className="w-100 mx-auto">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivetRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivetRoute>
            <Route path="/exploremore">
              <AllProducts></AllProducts>
            </Route>
            <PrivetRoute path="/purchase/:id">
              <ProductPurchase></ProductPurchase>
            </PrivetRoute>
            <PrivetRoute path="/payment">
              <Payment></Payment>
            </PrivetRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
