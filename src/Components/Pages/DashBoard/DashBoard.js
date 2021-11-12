import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import AddAProduct from "../AddAProduct/AddAProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import MyOrders from "../MyOrders/MyOrders";
import PostAReview from "../PostAReview/PostAReview";
import PrivetAdmin from "../PrivetAdmin/PrivetAdmin";

const DashBoard = () => {
  // collect methods and property form useAuth
  const { isAdmin, setIsAdmin, UserInfo } = useAuth();
  let { path, url } = useRouteMatch();
  // role check
  if (UserInfo?.role === "admin") {
    setIsAdmin(true);
  } else {
    setIsAdmin(false);
  }

  return (
    <div>
      <div className="row container mx-auto w-100">
        <div className="col-md-3 col-sm-12">
          <div className="list-group">
            {/* admin rehaviour */}
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
                {/* user behavour */}
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
          {/* newsted route  */}
          <Switch>
            <Route exact path={`${path}/`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>
            <PrivetAdmin path={`${path}/addproduct`}>
              <AddAProduct></AddAProduct>
            </PrivetAdmin>
            <PrivetAdmin path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </PrivetAdmin>
            <PrivetAdmin path={`${path}/manageproducts`}>
              <ManageAllProducts></ManageAllProducts>
            </PrivetAdmin>
            <PrivetAdmin path={`${path}/manageorders`}>
              <ManageAllOrders></ManageAllOrders>
            </PrivetAdmin>
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
