import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import AddAProduct from "../AddAProduct/AddAProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import MyOrders from "../MyOrders/MyOrders";
import PostAReview from "../PostAReview/PostAReview";

const DashBoard = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(`https://polar-dawn-97020.herokuapp.com/register/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        }
      });
  }, []);

  let { path, url } = useRouteMatch();

  return (
    <div>
      <div className="row container mx-auto w-100">
        <div className="col-md-3 col-sm-12">
          <div className="list-group">
            {isAdmin ? (
              <>
                <Link
                  to={`${url}/addproduct`}
                  className="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  Add a product
                </Link>
                <Link
                  to={`${url}/manageproducts`}
                  className="list-group-item list-group-item-action"
                >
                  manage all product
                </Link>{" "}
                <Link
                  to={`${url}/manageorders`}
                  className="list-group-item list-group-item-action"
                >
                  Manage all orders
                </Link>
                <Link
                  to={`${url}/makeadmin`}
                  className="list-group-item list-group-item-action "
                >
                  Make Admin
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={`${url}/myorders`}
                  className="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  My Orders
                </Link>
                <Link
                  to={`${url}/review`}
                  className="list-group-item list-group-item-action"
                >
                  post review
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="col-md-9 col-sm-12">
          <Switch>
            <Route exact path={`${path}/`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/addproduct`}>
              <AddAProduct></AddAProduct>
            </Route>
            <Route path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/manageproducts`}>
              <ManageAllProducts></ManageAllProducts>
            </Route>
            <Route path={`${path}/manageorders`}>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path={`${path}/review`}>
              <PostAReview></PostAReview>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
