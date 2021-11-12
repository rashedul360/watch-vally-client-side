import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivetAdmin = ({ children, ...rest }) => {
  const { isAdmin, isLoading } = useAuth();
  if (isLoading) {
    return "loading";
  }
  // privet admin
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivetAdmin;
